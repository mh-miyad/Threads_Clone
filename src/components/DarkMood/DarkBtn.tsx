"use client";
import React, { useState } from "react";
import { HiOutlineSun } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/Redux/DarkTheme/ThemeSlice";
import { RootState } from "@/Redux/Store";
import { BsMoonStars } from "react-icons/bs";
const DarkBtn = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme(isDark));
  };

  return (
    <div>
      {isDark ? (
        <>
          <button onClick={handleToggleTheme}>
            <p className="sr-only">Dark Mood</p>
            <BsMoonStars />
          </button>
        </>
      ) : (
        <>
          <button onClick={handleToggleTheme}>
            <p className="sr-only">Day Mood </p>
            <HiOutlineSun />
          </button>
        </>
      )}
    </div>
  );
};

export default DarkBtn;
