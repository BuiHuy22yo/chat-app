"use client";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/login");
  };

  const rooms = ["general", "random", "tech-talk"]; // Dữ liệu tạm

  return (
    <div style={{ width: 260, background: "#3F0E40", color: "white", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px", borderBottom: "1px solid #522653" }}>
        <h2>Chat App</h2>
      </div>
      <div style={{ flex: 1, padding: "20px 0" }}>
        <h3>Phòng chat</h3>
        <ul>
          {rooms.map(room => (
            <li key={room} style={{ padding: "10px 20px", cursor: "pointer" }}># {room}</li>
          ))}
        </ul>
      </div>
      <div style={{ padding: "20px", borderTop: "1px solid #522653" }}>
        <button
          onClick={handleLogout}
          style={{ width: "100%", padding: 10, background: "#611f69", color: "white", border: "none", borderRadius: 4 }}
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
} 