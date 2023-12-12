"use client";
import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase/firebase.init";
export const AuthContext = createContext<{} | null>(null);

const ContextApi = ({ children }: { children: React.ReactNode }) => {
  const auth = getAuth(app);
  const login = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const [user, setUser] = useState(null);
  const authValue = {
    user,
    setUser,
    login,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default ContextApi;
