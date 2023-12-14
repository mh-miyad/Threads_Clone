"use client";
import { auth } from "@/firebase/firebase.init";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
interface User {
  user: object | null;
  setUser: React.Dispatch<React.SetStateAction<object | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<User>({
  user: {},
  setUser: () => {},
  loading: true,
  setLoading: () => {},
});

const ContextApi = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  const user1 = auth.currentUser;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
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
