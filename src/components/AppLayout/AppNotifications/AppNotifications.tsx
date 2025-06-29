"use client";
import React, { useState } from 'react';

interface Notification {
  id: number;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
}

interface AppNotificationsProps {
  notifications?: Notification[];
}

export default function AppNotifications({ notifications = [] }: AppNotificationsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [notifs, setNotifs] = useState<Notification[]>([
    { id: 1, message: "Welcome to the application!", type: 'success' },
    { id: 2, message: "New message received", type: 'info' },
    { id: 3, message: "System maintenance scheduled", type: 'warning' }
  ]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-orange-300 text-orange-800';
      case 'warning': return 'bg-orange-400 text-orange-900';
      case 'error': return 'bg-red-500 text-white';
      default: return 'bg-orange-200 text-orange-700';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg shadow-md transition-colors"
      >
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-300 rounded-full flex items-center justify-center">
            <span className="text-orange-800 font-bold text-xs">N</span>
          </div>
          <span>Notifications</span>
          <div className="w-5 h-5 bg-orange-300 rounded-full flex items-center justify-center">
            <span className="text-orange-800 text-xs font-bold">{notifs.length}</span>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-80 bg-white  -orange-200 rounded-lg shadow-lg z-50">
          <div className="p-4 bg-orange-50 -b -orange-200">
            <h3 className="text-lg font-semibold text-orange-800">Notifications</h3>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {notifs.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 -b -orange-100 ${getTypeColor(notification.type)}`}
              >
                <p className="text-sm">{notification.message}</p>
              </div>
            ))}
          </div>
          <div className="p-3 bg-orange-50">
            <button
              onClick={() => setNotifs([])}
              className="text-orange-600 hover:text-orange-800 text-sm"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 