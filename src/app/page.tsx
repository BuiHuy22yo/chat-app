'use client'; // 👈 Phải có dòng này ở đầu file

import RequireAuth from './RequireAuth';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

export default function HomePage() {
  return (
    <RequireAuth>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <ChatWindow />
      </div>
    </RequireAuth>
  );
}
