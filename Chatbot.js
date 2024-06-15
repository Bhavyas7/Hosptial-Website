import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    axios.post('http://localhost:5000/api/chatbot', { message: input })
      .then(response => {
        const botMessage = { text: response.data.reply, sender: 'bot' };
        setMessages([...messages, userMessage, botMessage]);
      })
      .catch(error => console.error(error));

    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;
