// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-41cd9.firebaseapp.com",
  projectId: "mern-blog-41cd9",
  storageBucket: "mern-blog-41cd9.appspot.com",
  messagingSenderId: "650751189130",
  appId: "1:650751189130:web:347a6af73e64296c61cd73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);