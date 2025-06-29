"use client";
import React from 'react';
import { FaMicrosoft, FaComments, FaVideo, FaUsers, FaCalendarAlt, FaBell } from 'react-icons/fa';

const navItems = [
  { label: 'Chat', icon: <FaComments size={24} />, active: true, color: 'text-purple-500' },
  { label: 'Meet', icon: <FaVideo size={24} />, active: false },
  { label: 'Communities', icon: <FaUsers size={24} />, active: false },
  { label: 'Calendar', icon: <FaCalendarAlt size={24} />, active: false },
  { label: 'Activity', icon: <FaBell size={24} />, active: false },
];

export default function AppNav() {
  return (
    <nav className="h-screen overflow-auto w-20 flex flex-col items-center py-4 border-r border-gray-200">
      {/* Logo */}
      <div className="mb-8">
        <FaMicrosoft size={32} className="text-indigo-600" />
      </div>
      {/* Nav Items */}
      <div className="flex flex-col gap-6 w-full">
        {navItems.map((item, idx) => (
          <div key={item.label} className="flex flex-col items-center w-full">
            <button
              className={`flex flex-col items-center w-full focus:outline-none group ${item.active ? 'text-purple-500 font-semibold' : 'text-gray-700 hover:text-purple-400'}`}
            >
              <span className={`mb-1 ${item.active ? 'text-purple-500' : ''}`}>{item.icon}</span>
              <span className={`text-xs ${item.active ? 'text-purple-500' : 'text-gray-700 group-hover:text-purple-400'}`}>{item.label}</span>
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
} 