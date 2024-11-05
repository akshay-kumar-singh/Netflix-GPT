// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-OKvDgLwsmMMR_FSsQLCzzmZ1-AoA5Qw",
  authDomain: "netflixgpt-cee5a.firebaseapp.com",
  projectId: "netflixgpt-cee5a",
  storageBucket: "netflixgpt-cee5a.firebasestorage.app",
  messagingSenderId: "471698138180",
  appId: "1:471698138180:web:1be013be8fa6a2ab484811",
  measurementId: "G-H3G01C3C4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication to use elsewhere in the app
export const auth = getAuth(app);
