import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
console.log("API Key:", API_KEY);

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        }
      );

      console.log("API Response:", response.data);

      const botReply =
        response.data?.candidates?.[0]?.content ||
        "I'm not sure, can you rephrase?";

      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error(
        "Error fetching response:",
        error.response?.data || error.message
      );
      setMessages([
        ...newMessages,
        {
          text: "Sorry, I couldn't process that. Try again later.",
          sender: "bot",
        },
      ]);
    }
  };

  return (
    <div className="career-chatbot">
      <h2>Chatbot</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>▶</button>
      </div>
    </div>
  );
};

export default Chatbot;
