"use client";

import React, { useState, useEffect, useRef } from "react";
import { TbRefresh } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import "./ChatWindow.css"; // Ensure this file is updated with the new styles
import { getAIMessage } from "../api/api"; // Import your API function
import { marked } from "marked";

const ChatModal = ({ isOpen, onClose, isMobile }) => {
  const defaultMessage = [
    {
      role: "assistant",
      content:
        "Hey! Welcome to my AI bot powered by RAG (Retrieval-Augmented Generation). Give it a try! I've built a knowledge base with information about me",
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

  const handleSend = async (userInput) => {
    if (!userInput.trim()) return; // Don't send empty messages

    // Add user's message to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: userInput },
    ]);
    setInput(""); // Clear the input field
    setIsSending(true); // Set sending state to true

    try {
      // Fetch AI response
      const aiResponse = await getAIMessage(userInput);

      // Simulate typing effect with a non-breaking space before the text
      await simulateTyping("\u00A0" + (aiResponse.content || ""), "assistant"); // Ensure aiResponse.content is defined
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: "Sorry, there was an error processing your request.",
        },
      ]);
    } finally {
      setIsSending(false); // Reset sending state
    }
  };

  const simulateTyping = (text, role) => {
    return new Promise((resolve) => {
      let index = 0;
      const typingSpeed = 30; // Adjust typing speed

      // Initialize an empty assistant message with empty content for typing
      setMessages((prevMessages) => [
        ...prevMessages,
        { role, content: "", typing: true },
      ]);

      const typeCharacter = () => {
        if (index < text.length) {
          setMessages((prevMessages) => {
            const lastMessageIndex = prevMessages.length - 1;
            const lastMessage = prevMessages[lastMessageIndex];

            // Ensure we are modifying the correct message and content is initialized
            if (
              lastMessage &&
              lastMessage.role === role &&
              lastMessage.typing
            ) {
              const updatedContent = (lastMessage.content || "") + text.charAt(index); // Use charAt for safe character retrieval
              const updatedMessage = {
                ...lastMessage,
                content: updatedContent, // Ensure content is defined
              };
              return [...prevMessages.slice(0, lastMessageIndex), updatedMessage];
            }
            return prevMessages;
          });
          index++;
          setTimeout(typeCharacter, typingSpeed); // Recursively call setTimeout for better control
        } else {
          setMessages((prevMessages) =>
            prevMessages.map((msg) =>
              msg.typing ? { ...msg, typing: false } : msg
            )
          );
          resolve();
        }
      };

      typeCharacter(); // Start typing
    });
  };

  const handleRefresh = async () => {
    setInput("");
    setMessages(defaultMessage);
    // await clearRecentQueries(); // Uncomment if you have this function
  };

  return (
    isOpen && (
      <div className={`chat-modal ${isMobile && isOpen ? "is-active" : ""}`}>
        <div className="chat-header">
          <h2 className="chat-title">Pranav Iyer</h2>
          <button className="close-button" onClick={onClose}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div key={index} className={`message-container ${message.role}`}>
              {message.role === "loading" ? (
                <div className="message loading-dots">
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                </div>
              ) : (
                <div className="assistant-message-container">
                  <div
                    className={`message ${message.role}-message`}
                    dangerouslySetInnerHTML={{
                      __html: marked(message.content).replace(/<p>|<\/p>/g, ""),
                    }}
                  ></div>
                  {message.role === "assistant" && (
                    <div className="assistant-label">AI</div>
                  )}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                handleSend(input);
                e.preventDefault();
              }
            }}
          />
          <button
            className="send-button"
            onClick={() => handleSend(input)}
            disabled={isSending}
          >
            {isSending ? "..." : "Send"}
          </button>
        </div>
      </div>
    )
  );
};

export default ChatModal;
