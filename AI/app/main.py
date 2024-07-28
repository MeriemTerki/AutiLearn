from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import google.generativeai as genai
from langchain_community.embeddings import CohereEmbeddings
from pinecone import Pinecone
from langchain_community.vectorstores import Pinecone as Pinecone_Langchain
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables from .env file
load_dotenv()

# Read secret keys from environment variables
cohere_secret_key = os.getenv('COHERE_SECRET_KEY')
pinecone_secret_key = os.getenv('PINECONE_SECRET_KEY')
gemini_secret_key = os.getenv('GEMINI_SECRET_KEY')
index_name = os.getenv('PINECONE_INDEX_NAME', 'haven-app')  # Default value 'haven-app' if not set

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the request models
class QueryRequest(BaseModel):
    query: str
    chat_history: list

class CourseRequest(BaseModel):
    type: str
    topic: str

class StoryRequest(BaseModel):
    type: str
    topic: str

class QuizRequest(BaseModel):
    course_content: str

def format_chat(chat):
    chat_history = []
    for message in chat:
        chat_history.append({
            "role": "user" if message["role"] == "user" else "model",
            "parts": [message["message"]]
        })
    return chat_history

def format_docs(documents):
    combined_content = ""
    for response in documents['matches']:
        if response["score"] > 0.2:
            combined_content += f"""Document: {response["metadata"]["text"]}\n"""
    return combined_content

def query_refinement(chat_history, query):
    if len(chat_history) > 15:
        chat_history = chat_history[-15:]
    genai.configure(api_key=gemini_secret_key)
    system_prompt = f"""Given a chat history and the latest user question which might reference context in the chat history, 
                        formulate a standalone question which can be understood without the chat history. 
                        Do NOT answer the question, just reformulate it if needed and otherwise return it as is.
                        Here is the chat {chat_history}."""
    
    model = genai.GenerativeModel('gemini-1.5-flash', system_instruction=system_prompt)
    return model.generate_content(query).text.strip() 

def chat(query, chat_history):
    history = format_chat(chat_history)
    query = query_refinement(chat_history, query)
    embeddings = CohereEmbeddings(cohere_api_key=cohere_secret_key, user_agent=index_name)
    embedded_query = embeddings.embed_query(query)
    pc = Pinecone(api_key=pinecone_secret_key)
    index = pc.Index(index_name)
    results = index.query(
        vector=embedded_query,
        top_k=5,  # Increase the number of documents retrieved
        include_metadata=True
    )
    results = format_docs(results)
    context = ''.join(results)
    model = genai.GenerativeModel('gemini-1.5-flash', system_instruction=f"You are a smart assistant that answers questions related to biology and physics. The user is a kid with autism, so the answer has to be well suitable for this kid, which means you have to clarify everything in detail and use very simple language and a direct manner for answering. Answer to the user's query based on this context: {context}")
    chat = model.start_chat(history=history)
    return chat.send_message(content=query).text

def generate_course(type, topic):
    embeddings = CohereEmbeddings(cohere_api_key=cohere_secret_key, user_agent=index_name)
    query = f"Type: {type}, Topic: {topic}"
    embedded_query = embeddings.embed_query(query)
    pc = Pinecone(api_key=pinecone_secret_key)
    index = pc.Index(index_name)
    results = index.query(
        vector=embedded_query,
        top_k=5,  # Increase the number of documents retrieved
        include_metadata=True
    )
    results = format_docs(results)
    if len(results) == 0:
        return "I'm sorry, I don't have course content available for this topic. Could you please select another topic?"
    else:
        genai.configure(api_key=gemini_secret_key)
        system_prompt = f"""You are a smart assistant that can generate detailed and comprehensive courses related to biology and physics. The user is a kid with autism, so the course has to be well suitable for this kid, which means you have to clarify everything in detail and use very simple language and a direct manner for giving information. You need to provide a thorough explanation, covering all relevant details from the context provided. Here is the detailed context: {results}"""
        model = genai.GenerativeModel('gemini-1.5-flash', system_instruction=system_prompt)
        return model.generate_content(query).text

def generate_story(type, topic):
    embeddings = CohereEmbeddings(cohere_api_key=cohere_secret_key, user_agent=index_name)
    query = f"Type: {type}, Topic: {topic}"
    embedded_query = embeddings.embed_query(query)
    pc = Pinecone(api_key=pinecone_secret_key)
    index = pc.Index(index_name)
    results = index.query(
        vector=embedded_query,
        top_k=5,  # Increase the number of documents retrieved
        include_metadata=True
    )
    results = format_docs(results)
    if len(results) == 0:
        return "I'm sorry, I don't have story content available for this topic. Could you please select another topic?"
    else:
        genai.configure(api_key=gemini_secret_key)
        system_prompt = f"""You're a smart assistant that can generate fictional stories for kids about {type} based on the topic '{topic}'. The stories have to follow the learning style of kids with autism, which means mentioning every piece of information with details using very simple language and a direct manner. The stories should be engaging and attractive for the kids. Here is the detailed context: {results}"""
        model = genai.GenerativeModel('gemini-1.5-flash', system_instruction=system_prompt)
        return model.generate_content(query).text

def generate_quiz(course_content):
    genai.configure(api_key=gemini_secret_key)
    system_prompt = f"""You are a creative quiz master who designs interactive and engaging quizzes for kids. Create a fun quiz with multiple-choice questions based on the following course content. Each question should have four options, with one correct answer and three distractors. Include an explanation for the correct answer to help kids understand the topic better. Use simple language and a direct manner suitable for kids with autism. Make the quiz exciting and enjoyable. Here is the course content to help you craft the quiz: {course_content}"""
    model = genai.GenerativeModel('gemini-1.5-flash', system_instruction=system_prompt)
    return model.generate_content(f"Create a quiz for the following course content").text

@app.post("/chat")
async def chat_endpoint(request: QueryRequest):
    try:
        response = chat(request.query, request.chat_history)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/generate-course")
async def generate_course_endpoint(request: CourseRequest):
    try:
        course_content = generate_course(request.type, request.topic)
        return {"course_content": course_content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/generate-story")
async def generate_story_endpoint(request: StoryRequest):
    try:
        story_content = generate_story(request.type, request.topic)
        return {"story_content": story_content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/generate-quiz")
async def generate_quiz_endpoint(request: QuizRequest):
    try:
        quiz_content = generate_quiz(request.course_content)
        return {"quiz_content": quiz_content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
