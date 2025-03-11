import React, { useState } from "react";
import axios from "axios";
import "./CareerInterestForm.css";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const CareerInterestForm = () => {
  const [messages, setMessages] = useState([
    {
      text: "Which of the following skills do you feel most confident in?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      // API request to Gemini
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${API_KEY}`,
        {
          prompt: { text: input },
          temperature: 0.7,
        }
      );

      const botReply =
        response.data.candidates[0]?.output ||
        "I'm not sure, can you rephrase?";

      // Add bot response to chat
      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([
        ...newMessages,
        { text: "Error fetching response. Try again later.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="career-chatbot">
      <h2>queryMate.AI</h2>
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
          placeholder="Tell me about yourself..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>▶</button>
      </div>
    </div>
  );
};

export default CareerInterestForm;
