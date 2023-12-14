"use client";
import { auth } from "@/firebase/firebase.init";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

interface AuthContextProps<T> {
  user: T | null;
  setUser: React.Dispatch<React.SetStateAction<T | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextProps<any>>({
  user: null,
  setUser: () => {},
  loading: true,
  setLoading: () => {},
});

const ContextApi = <T extends object>({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: FirebaseUser | null) => {
        setLoading(true);
        if (firebaseUser) {
          // Assuming your user object has the same structure as FirebaseUser
          setUser(firebaseUser as T);
          setLoading(false);
        }
      }
    );
    return () => unsubscribe();
  }, []);

  const authValue: AuthContextProps<T> = {
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
