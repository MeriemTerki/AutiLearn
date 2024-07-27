from dotenv import load_dotenv
import os
import google.generativeai as genai
from langchain_community.embeddings import CohereEmbeddings
from pinecone import Pinecone
from langchain_community.vectorstores import Pinecone as Pinecone_Langchain

# Load environment variables from .env file
load_dotenv()

# Read secret keys from environment variables
cohere_secret_key = os.getenv('COHERE_SECRET_KEY')
pinecone_secret_key = os.getenv('PINECONE_SECRET_KEY')
gemini_secret_key = os.getenv('GEMINI_SECRET_KEY')
index_name = os.getenv('PINECONE_INDEX_NAME', 'haven-app')  # Default value 'haven-app' if not set

# Ensure the API keys are loaded correctly
print(f"COHERE_SECRET_KEY: {cohere_secret_key}")
print(f"PINECONE_SECRET_KEY: {pinecone_secret_key}")
print(f"GEMINI_SECRET_KEY: {gemini_secret_key}")

# This function formats the chat history to the format that is compatible with Gemini chat
def format_chat(chat):
    chat_history = []
    for message in chat:
        chat_history.append({
            "role": "user" if message["role"] == "user" else "model",
            "parts": [message["message"]]
        })
    return chat_history

# This function takes a list of Pinecone documents and returns the combined and formatted documents
def format_docs(documents):
    combined_content = ""
    for response in documents['matches']:
        if response["score"] > 0.2:
            combined_content += f"""Document: {response["metadata"]["text"]}\n"""
    return combined_content

# This function takes the chat history and a query then returns a refined query that can be used for similarity search
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

# This function takes a query and chat history then returns the response from the model
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
    context = results
    model = genai.GenerativeModel('gemini-1.5-flash', system_instruction=f"You are a smart assistant that answers questions related to biology and physics. The user is a kid with autism, so the answer has to be well suitable for this kid, which means you have to clarify everything in detail and use very simple language and a direct manner for answering. Answer to the user's query based on this context: {context}")
    chat = model.start_chat(history=history)
    return chat.send_message(content=query).text

# This function is an implementation of a naive retrieval augmented generation flow
def rag(query):
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
    if len(results) == 0:
        return "I'm sorry, I don't have an answer to that question. Could you please ask another question?"
    else:
        genai.configure(api_key=gemini_secret_key)
        system_prompt = f"""You are a smart assistant that answers questions related to biology and physics. The user is a kid with autism, so the answer has to be well suitable for this kid, which means you have to clarify everything in detail and use very simple language and a direct manner for answering. Answer the user's query by formulating a well-elaborated answer that relies on the following context: {results}."""
        model = genai.GenerativeModel('gemini-1.5-flash', system_instruction=system_prompt)
        return model.generate_content(query).text

# New function to generate course content based on type and topic
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

# New function to generate interactive and engaging stories based on type and topic
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
        system_prompt = f"""You are a creative storyteller who creates engaging and interactive adventure stories for kids. For the topic '{topic}' related to {type}, create a story featuring fictional characters who embark on an adventure to explore this topic. Use lively and imaginative dialogue between characters to explain the topic in a fun and captivating way. Make sure the language is very simple and direct, suitable for kids with autism. Include exciting interactions and adventures to keep the child engaged and eager to learn. Here is the context to help you craft the story: {results}"""
        model = genai.GenerativeModel('gemini-1.5-flash', system_instruction=system_prompt)
        return model.generate_content(query).text
# New function to generate interactive quizzes based on type and topic
def generate_quiz(type, topic):
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
        return "I'm sorry, I don't have quiz content available for this topic. Could you please select another topic?"
    else:
        genai.configure(api_key=gemini_secret_key)
        system_prompt = f"""You are a creative quiz master who designs interactive and engaging quizzes for kids. For the topic '{topic}' related to {type}, create a fun quiz with multiple-choice questions. Each question should have four options, with one correct answer and three distractors. Include an explanation for the correct answer to help kids understand the topic better. Use simple language and a direct manner suitable for kids with autism. Make the quiz exciting and enjoyable. Here is the detailed context to help you craft the quiz: {results}"""
        model = genai.GenerativeModel('gemini-1.5-flash', system_instruction=system_prompt)
        return model.generate_content(query).text
# Example usage
if __name__ == "__main__":
    query = "What is photosynthesis?"
    chat_history = [{"role": "user", "message": query}]
    response = chat(query, chat_history)
    print(response)
    
    # Generate course content
    type = "biology"
    topic = "Chromosomes"
    course_content = generate_course(type, topic)
    print("Course Content:", course_content)
    
    # Generate story content
    type = "biology"
    topic = "Genetics"
    story_content = generate_story(type, topic)
    print("Story Content:", story_content)

    # Generate quiz content
    type = "biology"
    topic = "Genetics"
    quiz_content = generate_quiz(type, topic)
    print("Quiz Content:", quiz_content)
