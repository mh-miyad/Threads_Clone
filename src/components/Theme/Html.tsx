"use client";

import { RootState } from "@/Redux/Store";
import { useSelector } from "react-redux";

const Html = ({ children }: { children: React.ReactNode }) => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  return (
    <html lang="en" className={`${isDark ? "dark" : ""}`}>
      {children}
    </html>
  );
};

export default Html;
