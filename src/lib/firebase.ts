// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBK-VcQ3-pBbzpJDbC37YLCnfbf_GknId0",
    authDomain: "chat-app-78439.firebaseapp.com",
    projectId: "chat-app-78439",
    storageBucket: "chat-app-78439.firebasestorage.app",
    messagingSenderId: "949431639285",
    appId: "1:949431639285:web:e5f37f244cb58ef78939bc",
    measurementId: "G-R8NWK6TEDM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

