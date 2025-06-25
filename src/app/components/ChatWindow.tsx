"use client";
import { useState } from 'react';
import { FiSmile, FiPaperclip, FiSend, FiUsers, FiVideo, FiMoreHorizontal } from 'react-icons/fi';
import { BsEmojiSmile } from 'react-icons/bs';

// Dữ liệu tin nhắn tạm thời
const initialMessages = [];

export default function ChatWindow() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: "Bùi Huy (You)",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "https://i.pravatar.cc/150?img=4",
      isMe: true
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col flex-1 h-full bg-[#f3f2f5]">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <img src="https://i.pravatar.cc/150?img=1" alt="avatar" className="w-12 h-12 rounded-full" />
          <div>
            <div className="font-bold text-2xl flex items-center gap-2">WordPress Dev <span className="text-base font-normal text-gray-400">3/7</span></div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <FiUsers /> 10 members
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600"><FiVideo /> Meet now</button>
          <div className="flex gap-2 text-base font-medium">
            <span className="border-b-2 border-blue-600 text-blue-600 pb-1 cursor-pointer">Chat</span>
            <span className="text-gray-500 pb-1 px-2 cursor-pointer">Files</span>
            <span className="text-gray-500 pb-1 px-2 cursor-pointer">Photos</span>
          </div>
          <button className="text-gray-500 hover:text-blue-600"><FiMoreHorizontal size={24} /></button>
        </div>
      </div>
      {/* Message List */}
      <div className="flex-1 overflow-y-auto px-12 py-8 space-y-6 bg-[#f3f2f5]">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
            {!msg.isMe && <img src={msg.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3 self-end" />}
            <div className={`max-w-xl ${msg.isMe ? 'bg-[#6264A7] text-white rounded-2xl rounded-br-none' : 'bg-[#e7e9fe] text-gray-900 rounded-2xl rounded-bl-none'} px-5 py-3 shadow-sm relative`}>
              {/* Block quote */}
              {msg.quote && (
                <div className="mb-2 p-2 bg-gray-100 border-l-4 border-blue-300 text-xs text-gray-600 rounded-md">
                  <span className="font-semibold text-[#464775]">{msg.quote.sender}: </span>{msg.quote.text}
                </div>
              )}
              {!msg.isMe && <div className="font-semibold text-sm mb-1 text-[#464775]">{msg.sender}</div>}
              <div className="whitespace-pre-line break-words text-base flex items-center gap-2">
                {msg.text}
                {msg.emoji && <span className="text-2xl align-middle">{msg.emoji}</span>}
              </div>
              <div className={`text-xs mt-1 ${msg.isMe ? 'text-gray-200' : 'text-gray-500'} text-right`}>{msg.time}</div>
            </div>
            {msg.isMe && <img src={msg.avatar} alt="avatar" className="w-10 h-10 rounded-full ml-3 self-end" />}
          </div>
        ))}
      </div>
      {/* Message Input */}
      <div className="px-8 py-5 border-t border-gray-200 bg-white">
        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
          <button type="button" className="p-2 text-gray-500 hover:text-blue-600"><BsEmojiSmile size={22} /></button>
          <button type="button" className="p-2 text-gray-500 hover:text-blue-600"><FiPaperclip size={22} /></button>
          <input
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-base"
          />
          <button type="submit" className="ml-2 px-6 py-3 rounded-full bg-[#6264A7] text-white font-semibold hover:bg-[#464775] flex items-center gap-2 text-lg">
            <span>Send</span>
            <FiSend size={20} />
          </button>
        </form>
      </div>
    </div>
  );
} 