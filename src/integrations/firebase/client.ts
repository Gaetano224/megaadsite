import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGXJzn_1kD_2RjFAn-EUvejJ12Kz4GzFA",
  authDomain: "megaadsite.firebaseapp.com",
  projectId: "megaadsite",
  storageBucket: "megaadsite.firebasestorage.app",
  messagingSenderId: "1087627688779",
  appId: "1:1087627688779:web:57ea549e1c2210306546ce",
  measurementId: "G-VHD6MBLHBV"
};

// Initialize Firebase for SSR compatibility
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
