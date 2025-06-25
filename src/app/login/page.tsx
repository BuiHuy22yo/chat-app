"use client";
import { auth } from "@/lib/firebase";
import { log } from "console";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/");
    } catch (error: any) {
      console.log(error);
      alert((isRegister ? "Đăng ký" : "Đăng nhập") + " thất bại: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 320 }}>
        <h2 style={{ textAlign: "center" }}>{isRegister ? "Đăng ký" : "Đăng nhập"}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ padding: 10, fontSize: 16, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ padding: 10, fontSize: 16, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: 12, fontSize: 18, borderRadius: 8, background: "#4285F4", color: "white", border: "none" }}
        >
          {loading ? "Đang xử lý..." : isRegister ? "Đăng ký" : "Đăng nhập"}
        </button>
        <span style={{ textAlign: "center", cursor: "pointer", color: "#4285F4" }} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Đã có tài khoản? Đăng nhập" : "Chưa có tài khoản? Đăng ký"}
        </span>
      </form>
    </div>
  );
} 