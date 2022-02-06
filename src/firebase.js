import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPCA3DBxyzr9amMjI85y9gti11EEBL_fg",
  authDomain: "todo-app-nayeem.firebaseapp.com",
  projectId: "todo-app-nayeem",
  storageBucket: "todo-app-nayeem.appspot.com",
  messagingSenderId: "720871003447",
  appId: "1:720871003447:web:04dde8b8c1f5dbd2c3f6b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
