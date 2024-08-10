import React, { useState } from 'react';

const ChatbotPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState("");

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (inputValue.trim()) {
            // Add user message
            setMessages([...messages, { text: inputValue.trim(), sender: "user" }]);

            // Simulate bot response
            setMessages(prevMessages => [
                ...prevMessages,
                { text: `You said: ${inputValue.trim()}`, sender: "bot" }
            ]);

            // Clear input
            setInputValue("");
        }
    };

    return (
        <div>
            {/* Popup Button */}
            <button
                onClick={toggleChatbot}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    fontSize: '24px'
                }}
            >
                💬
            </button>

            {/* Chatbot Popup */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '90px',
                    right: '20px',
                    width: '300px',
                    maxWidth: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '10px',
                        textAlign: 'center',
                        fontSize: '1.2em',
                        fontWeight: 'bold',
                        borderRadius: '10px 10px 0 0'
                    }}>
                        Chatbot
                    </div>
                    <div style={{
                        flex: '1',
                        padding: '10px',
                        overflowY: 'auto',
                        backgroundColor: '#e9ecef',
                        maxHeight: '300px'
                    }}>
                        {messages.map((message, index) => (
                            <div key={index} style={{
                                marginBottom: '10px',
                                padding: '10px',
                                borderRadius: '10px',
                                maxWidth: '70%',
                                backgroundColor: message.sender === 'user' ? '#007bff' : '#e2e2e2',
                                color: message.sender === 'user' ? '#fff' : '#333',
                                marginLeft: message.sender === 'user' ? 'auto' : '0'
                            }}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div style={{
                        display: 'flex',
                        padding: '10px',
                        backgroundColor: '#fff',
                        borderTop: '1px solid #ddd',
                        borderRadius: '0 0 10px 10px'
                    }}>
                        <input
                            type="text"
                            id="userInput"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                            onKeyPress={handleKeyPress}
                            style={{
                                flex: '1',
                                padding: '10px',
                                border: 'none',
                                borderRadius: '5px',
                                marginRight: '10px',
                                boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                        <button onClick={sendMessage} style={{
                            padding: '10px 15px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
                        }}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotPopup;
