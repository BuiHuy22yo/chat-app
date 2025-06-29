"use client";
import React, { useRef, useEffect } from 'react';
import { FaUserCircle, FaSmile, FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import { messageList, MessageItem } from './messageData';

export default function AppUnified() {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, []);

  return (
    <div className="flex flex-1 flex-col bg-white rounded-2xl shadow p-0">
      {/* Header Chat Room */}
      <div className="flex items-center justify-between px-8 py-4 border-b" style={{borderColor: '#0000000d', borderBottomWidth: 1}}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white bg-blue-300`}>FA</div>
          <div>
            <div className="font-bold text-lg text-gray-900">Frontend Team</div>
            <div className="flex gap-4 text-sm text-gray-500 mt-1">
              <span className="font-semibold text-indigo-600 border-b-2" style={{borderColor: '#0000000d', borderBottomWidth: 2}}>Chat</span>
              <span className="hover:text-indigo-600 cursor-pointer">Files</span>
              <span className="hover:text-indigo-600 cursor-pointer">Photos</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200"><FaUserCircle className="text-xl" /></button>
          <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200">Meet now</button>
          <span className="text-gray-500">8</span>
          <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200"><FaSmile className="text-xl" /></button>
        </div>
      </div>
      {/* Message List */}
      <div className="flex-1 overflow-y-auto px-8 py-4 space-y-6 ">
        {messageList.map((msg: MessageItem) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.isYou ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-3 mb-1">
              {msg.initials ? (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-base font-bold text-white">{msg.initials}</div>
              ) : (
                <FaUserCircle className="w-8 h-8 text-gray-300" />
              )}
              <span className="font-semibold text-gray-800 text-sm">{msg.sender}</span>
            </div>
            <div className={`p-2 rounded-lg text-sm ${msg.isYou ? 'bg-indigo-100 text-indigo-900' : 'bg-white text-gray-800'}`}>
              {msg.content}
            </div>
            <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>
      {/* Input Chat */}
      <div className="px-8 py-1 border border-gray-700 flex items-center gap-3 max-w-4/5 m-auto w-full my-4 rounded-lg" style={{borderColor: '#0000000d', borderTopWidth: 1}}>
        <button className="text-gray-300 hover:text-indigo-500"><FaSmile size={22} /></button>
        <button className="text-gray-300 hover:text-indigo-500"><FaPaperclip size={22} /></button>
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 "
        />
        <button className="text-gray-300 hover:text-indigo-500 rounded-full p-2 ml-2"><FaPaperPlane size={20} /></button>
      </div>
    </div>
  );
} 