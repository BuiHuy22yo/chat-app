"use client";
import { useState } from 'react';

// Dữ liệu tin nhắn tạm thời
const initialMessages = [
  { id: 1, text: "Chào bạn, đây là kênh #general", sender: "Admin", time: "10:00 AM" },
  { id: 2, text: "Hello!", sender: "User A", time: "10:01 AM" },
  { id: 3, text: "Làm sao để gửi tin nhắn?", sender: "User B", time: "10:02 AM" },
];

export default function ChatWindow() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: "Me", // Sẽ thay bằng user thật sau
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "white" }}>
      {/* Header */}
      <div style={{ padding: "18px 20px", borderBottom: "1px solid #ddd" }}>
        <h3 style={{ margin: 0 }}># general</h3>
      </div>
      {/* Message List */}
      <div style={{ flex: 1, padding: 20, overflowY: "auto" }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ marginBottom: 12 }}>
            <div style={{ fontWeight: "bold" }}>{msg.sender}{' '}
              <span style={{ fontSize: 12, color: "#666" }}>{msg.time}</span>
            </div>
            <div>{msg.text}</div>
          </div>
        ))}
      </div>
      {/* Message Input */}
      <div style={{ padding: 20, borderTop: "1px solid #ddd" }}>
        <form onSubmit={handleSendMessage} style={{ display: "flex" }}>
          <input
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Nhắn tin trong #general"
            style={{ flex: 1, padding: 10, borderRadius: 6, border: "1px solid #ccc", marginRight: 10 }}
          />
          <button type="submit" style={{ padding: "10px 20px", border: "none", background: "#007a5a", color: "white", borderRadius: 6 }}>
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
} 