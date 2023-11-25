"use client";
import React, { useState } from "react";

const NotificationBar = () => {
  const [selectedItem, setSelectedItem] = useState("All");

  const notification: string[] = [
    "All",
    "Requests",
    "Replies",
    "Mentions",
    "Verified",
  ];

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="">
      <ul className="flex justify-around items-center flex-wrap relative  ">
        {notification.map((item) => (
          <li
            className={`${
              selectedItem === item
                ? "bg-black text-white  dark:bg-white dark:text-black"
                : "bg-white text-black dark:bg-black dark:text-white"
            } rounded-lg py-1.5 px-7 border-black/10 dark:shadow-white/20  shadow shadow-gray-400/20 cursor-pointer border text-sm font-medium mt-5`}
            key={item}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationBar;
