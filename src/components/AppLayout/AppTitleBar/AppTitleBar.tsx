"use client";
import React from 'react';
import { FaSearch, FaEllipsisV, FaUserCircle } from 'react-icons/fa';

export default function AppTitleBar() {
  return (
    <div className="flex items-center justify-between min-h-12">
      {/* Center: Search box */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center bg-white rounded-xl px-4 py-1 shadow-sm min-w-[350px] max-w-lg w-full ">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
      {/* Right: menu + avatar */}
      <div className="flex items-center gap-4">
        <FaEllipsisV className="text-gray-500 text-lg cursor-pointer" />
        <div className="w-9 h-9 rounded-full overflow-hidden -2 -gray-300 flex items-center justify-center bg-white">
          {/* Avatar icon, bạn có thể thay bằng <img src=... /> */}
          <FaUserCircle className="text-3xl text-gray-400" />
        </div>
      </div>
    </div>
  );
} 