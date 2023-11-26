"use client";
import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/Redux/DarkTheme/ThemeSlice";
import { RootState } from "@/Redux/Store";

const DarkBtn = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme(isDark));
  };

  return (
    <div>
      <Switch onClick={handleToggleTheme} />
    </div>
  );
};

export default DarkBtn;
