// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
import { getAuth } from "firebase/auth";
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC6K39yJYgB3aimjwN2Kyghu95HLDW2ftU",
  authDomain: "threadsclone-609dd.firebaseapp.com",
  projectId: "threadsclone-609dd",
  storageBucket: "threadsclone-609dd.appspot.com",
  messagingSenderId: "1092690731761",
  appId: "1:1092690731761:web:259cc98e5211a238bfff50",
  measurementId: "G-6MB0S8MCRY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
