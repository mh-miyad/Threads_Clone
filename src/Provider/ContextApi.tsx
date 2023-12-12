"use client";
import React, { createContext, useState } from "react";

export const AuthContext = createContext<{} | null>(null);

const ContextApi = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const authValue = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default ContextApi;
