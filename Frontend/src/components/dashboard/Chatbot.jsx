import React, { useState, useRef, useEffect } from "react";
import { SendHorizontal } from "lucide-react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
const Chatbot = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [introVisible, setIntroVisible] = useState(true);
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const usernameFromEmail = user.email.split("@")[0];
        setUsername(usernameFromEmail);
      }
    });
    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    if (username) {
      setMessages([
        { text: `Hello ${username}, how can I help you today?`, type: "bot" },
      ]);
    }
  }, [username]);
  // Function to scroll chat container to bottom
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending message
  const handleSend = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, type: "user" }];
      setMessages(newMessages);
      setInput("");

      // Call the API to get the bot response
      try {
        const response = await fetch(
          "https://mega-hackathon-2024.onrender.com/chat",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: input,
              chat_history: newMessages.map((msg) => ({
                role: msg.type,
                message: msg.text,
              })),
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const botResponse =
          data.response || "Sorry, I couldn't fetch the response.";

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, type: "bot" },
        ]);
        scrollToBottom();
      } catch (error) {
        console.error("Error fetching bot response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, I couldn't fetch the response.", type: "bot" },
        ]);
        scrollToBottom();
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
      setIntroVisible(false);
    }
  };

  const adjustInputHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    adjustInputHeight();

    if (introVisible) {
      setIntroVisible(false);
    }
  };

  return (
    <div className="xl:p-6 pb-2 min-h-full relative text-zinc-900 px-5 md:px-12 xl:px-5">
      {introVisible && (
        <div className="text-center md:text-left mb-12 max-w-[600px]">
          <h1 className="font-bold text-4xl mb-3">Chatbot</h1>
          <p className="font-medium text-gray-700">
            Our AI chatbot is your learning companion. Ask any question related
            to your learning material and receive comprehensive, informative
            answers.
          </p>
        </div>
      )}

      <div
        ref={chatContainerRef}
        className="flex flex-col mb-16 overflow-y-auto scroll-smooth pb-8 p-4 max-h-[70vh]"
        style={{ scrollBehavior: "smooth" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 break-all shadow-sm lg:max-w-[45%] mb-4 rounded-[16px] font-semibold ${
              msg.type === "bot"
                ? "bg-[#E2E2E282] ml-0"
                : "bg-[#EF7F7E66] mr-0 self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="fixed left-0 right-0 bottom-0 bg-white py-6 lg:py-4 flex justify-center">
        <div className="flex border-2 w-[90%] xl:max-w-[800px] border-[#EF7F7E] bg-[#F6F9FE] rounded-xl p-2 xl:ml-52">
          <input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-[100%] xl:max-w-[800px] p-2 bg-[#F6F9FE] outline-none"
            style={{ height: "auto", minHeight: "2rem", maxHeight: "3rem" }}
            placeholder="Type your message here..."
          />
          <button onClick={handleSend} className="ml-2 p-2 text-[#EF7F7E]">
            <SendHorizontal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
