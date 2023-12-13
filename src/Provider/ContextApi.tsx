"use client";
import { auth } from "@/firebase/firebase.init";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<{} | null>(null);

const ContextApi = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const user1 = auth.currentUser;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [user1, user]);

  const authValue = {
    user,
    setUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default ContextApi;
