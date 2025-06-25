"use client";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FiMessageSquare, FiUsers, FiCalendar, FiPhone, FiSettings, FiLogOut, FiSearch, FiFilter, FiVideo, FiEdit2 } from "react-icons/fi";
import { MdGroups, MdNotificationsNone } from "react-icons/md";
import { useState } from "react";

const navIcons = [
  { icon: FiMessageSquare, label: "Chat", active: true },
  { icon: FiPhone, label: "Meet" },
  { icon: MdGroups, label: "Communities" },
  { icon: FiCalendar, label: "Calendar" },
  { icon: MdNotificationsNone, label: "Activity" },
];

const NavItem = ({ icon: Icon, active = false }: { icon: React.ElementType, active?: boolean }) => (
  <button className={`w-11 h-11 flex items-center justify-center rounded-xl mb-2 transition-colors ${active ? 'bg-[#e7e9fe] text-[#6264A7]' : 'text-gray-400 hover:bg-gray-200 hover:text-[#6264A7]'}`}
    >
    <Icon size={24} />
  </button>
);

const ChatListItem = ({ name, lastMessage, time, unread, active, avatar }: { name: string, lastMessage: string, time: string, unread: number, active: boolean, avatar: string }) => (
  <div className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer shadow-sm border transition-all ${active ? 'bg-[#e7e9fe] border-[#c7c9f7]' : 'bg-white border-transparent hover:bg-gray-100'}`}>
    <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-base truncate">{name}</p>
        <p className="text-xs text-gray-400 ml-2 whitespace-nowrap">{time}</p>
      </div>
      <div className="flex justify-between items-center mt-0.5">
        <p className="text-xs text-gray-600 truncate max-w-[120px]">{lastMessage}</p>
        {unread > 0 && <span className="ml-2 bg-blue-600 text-white text-xs font-bold rounded-full px-2 py-0.5">{unread}</span>}
      </div>
    </div>
  </div>
);

export default function Sidebar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/login");
  };

  const chats = [
    { name: "WordPress Dev", lastMessage: "đợt đấy QN thiệt hại lắm a", time: "3/7", unread: 7, active: true, avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Python và ứng dụng", lastMessage: "Bùi Văn: https://www.youtube.com/...", time: "1/16", unread: 0, active: false, avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "airdrop 2024", lastMessage: "thiệt hại lắm Huy...", time: "1/11", unread: 0, active: false, avatar: "https://i.pravatar.cc/150?img=3" },
    { name: "Bùi Huy (You)", lastMessage: "Làm vuejs thôi", time: "12/6/2024", unread: 0, active: false, avatar: "https://i.pravatar.cc/150?img=4" },
  ];

  return (
    <div className="flex h-screen bg-[#f3f2f5]">
      {/* Cột icon trái */}
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4 relative">
        <div className="text-2xl font-bold mb-6 text-[#6264A7]">T</div>
        <div className="flex flex-col items-center flex-1 gap-1">
          {navIcons.map((item, idx) => (
            <NavItem key={item.label} icon={item.icon} active={item.active} />
          ))}
        </div>
        <div className="mt-auto mb-2">
          <button onClick={handleLogout} className="w-11 h-11 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-200 hover:text-[#6264A7]">
            <FiLogOut size={24} />
          </button>
        </div>
      </div>

      {/* Cột danh sách chat */}
      <div className="w-80 bg-[#f3f2f5] flex flex-col border-r border-gray-200 relative">
        {/* Header Chat + nút */}
        <div className="flex items-center justify-between px-6 pt-6 pb-3 bg-[#f3f2f5]">
          <h2 className="text-2xl font-bold">Chat</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 text-lg"><FiFilter /></button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 text-lg"><FiVideo /></button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 text-lg"><FiEdit2 /></button>
          </div>
        </div>
        {/* Search bar */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          <p className="px-2 text-sm font-semibold text-gray-600 mb-1">Recent</p>
          {chats
            .filter(chat => chat.name.toLowerCase().includes(search.toLowerCase()))
            .map(chat => <ChatListItem key={chat.name} {...chat} />)}
        </div>
        {/* Nút Invite to Teams */}
        <div className="p-4 bg-[#f3f2f5] border-t border-gray-200">
          <button className="w-full py-2 rounded-xl bg-[#6264A7] text-white font-semibold text-base hover:bg-[#464775] transition">Invite to Teams</button>
        </div>
      </div>
    </div>
  );
} 