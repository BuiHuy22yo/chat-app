"use client";
import React from 'react';
import { FaFilter, FaVideo, FaEdit, FaUserCircle } from 'react-icons/fa';
import { chatList } from './chatData';

export default function AppSubNav() {
  return (
    <div className="p-4 w-80 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Chat</h2>
        <div className="flex gap-2">
          <button className="bg-white p-2 rounded-lg shadow hover:bg-gray-200"><FaFilter /></button>
          <button className="bg-white p-2 rounded-lg shadow hover:bg-gray-200"><FaVideo /></button>
          <button className="bg-white p-2 rounded-lg shadow hover:bg-gray-200"><FaEdit /></button>
        </div>
      </div>
      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chatList.map((chat) => (
          <div key={chat.id} className="flex items-center justify-between px-2 py-3 rounded-xl hover:bg-white cursor-pointer transition mb-1">
            <div className="flex items-center gap-3">
              {chat.initials ? (
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white ${chat.color}`}>{chat.initials}</div>
              ) : (
                <FaUserCircle className="w-10 h-10 text-gray-300" />
              )}
              <div className="flex flex-col">
                <span className="font-medium text-gray-900 text-sm">{chat.name}</span>
                <span className="text-xs text-gray-500 truncate max-w-[140px]">{chat.lastMessage}</span>
                {/* Trạng thái online/offline */}
                {chat.status && (
                  <span className={`text-xs ${chat.status==='online'?'text-green-500':'text-gray-400'}`}>{chat.status}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 min-w-[60px]">
              <span className="text-xs text-gray-500">{chat.lastDate}</span>
              {chat.unread && chat.unread > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-semibold">{chat.unread}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 