"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.init";

export const user = auth.currentUser;

const provider = new GoogleAuthProvider();
export const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const googleSignIn = () => {
  return signInWithRedirect(auth, provider);
};

export const logout = () => {
  return signOut(auth);
};
