import './Chatbot.css';

import { Navbar } from "../Navbar/Navbar";
import "./Chatbot.css";
import { useState } from "react";

export function Chatbot() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I assist you today?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() === "") return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        // Simulate a chatbot response
        setTimeout(() => {
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: "bot", text: "I'm still learning! Please contact support for complex queries." }
            ]);
        }, 1000);
    };

    return (
        <>
            <Navbar />
            <section className="dashboard">
                <div className="left-section">
                    <div className="nav">
                        <button onClick={() => window.history.back()}> Back </button>
                        <button onClick={() => window.location.href = "/dashboard"}> Dashboard </button>
                        <button onClick={() => window.location.href = "/message"}> Messages </button>
                    </div>
                </div>

                <div className="right-section">
                    <h2>Chatbot</h2>
                    <div className="chat-window">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender}`}>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            </section>
        </>
    );
}
