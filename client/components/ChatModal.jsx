"use client";

import React, { useState, useEffect, useRef } from "react";
import { TbRefresh } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import "./ChatWindow.css"; // Use your existing styles or adjust them as needed
// import { getAIMessage, clearRecentQueries } from "../api/api"; // Adjust API import as necessary
import { marked } from "marked";

const ChatModal = ({ isOpen, onClose, isMobile }) => {
  const defaultMessage = [
    {
      role: "assistant",
      content:
        "Welcome to Pranav Iyer's Assistant! Ask me anything about Pranav, his projects, or his experience!",
    },
  ];

  const [messages, setMessages] = useState(defaultMessage);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleRefresh = async () => {
    setInput("");
    setMessages(defaultMessage);
    // await clearRecentQueries(); // Uncomment if you have this function
  };

  return (
    isOpen && (
      <div className={`chat-modal ${isMobile && isOpen ? "is-active" : ""}`}>
        <div className="chat-header">
          <h2 className="chat-title">AI Assistant</h2>
          <button className="close-button" onClick={onClose}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div key={index} className={`${message.role}-message-container`}>
              {message.role === "loading" ? (
                <div className="message loading-dots">
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                </div>
              ) : (
                <div
                  className={`message ${message.role}-message`}
                  dangerouslySetInnerHTML={{
                    __html: marked(message.content).replace(/<p>|<\/p>/g, ""),
                  }}
                ></div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <button className="refresh-button" onClick={handleRefresh}>
            <TbRefresh />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                // handleSend(input);
                e.preventDefault();
              }
            }}
          />
          <button
            className="send-button"
            onClick={() => handleSend(input)}
            disabled={isSending}
          >
            Send
          </button>
        </div>
      </div>
    )
  );
};

export default ChatModal;
