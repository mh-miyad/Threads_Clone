// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_APIKEY}`,
  authDomain: `${process.env.FIREBASE_AUTHDOMAIN}`,
  projectId: `${process.env.FIREBASE_PROJECTID}`,
  storageBucket: `${process.env.FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.FIREBASE_MESSAGINGSENDERID}`,
  appId: `${process.env.FIREBASE_APPID}`,
  measurementId: `${process.env.FIREBASE_MEASUREMENTID}`,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
