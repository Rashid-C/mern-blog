
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-25d93.firebaseapp.com",
  projectId: "mern-blog-25d93",
  storageBucket: "mern-blog-25d93.appspot.com",
  messagingSenderId: "350243625409",
  appId: "1:350243625409:web:a5b1da5aeb4e0a1c437740"
};

export const app = initializeApp(firebaseConfig);
