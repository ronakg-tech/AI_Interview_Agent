// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-397c7.firebaseapp.com",
  projectId: "interviewiq-397c7",
  storageBucket: "interviewiq-397c7.firebasestorage.app",
  messagingSenderId: "584443928229",
  appId: "1:584443928229:web:40d9cbb20383472963b74c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { app, auth, provider };