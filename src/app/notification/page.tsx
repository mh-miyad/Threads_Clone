import NotificationBar from "@/components/Notification/NotificationBar";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Notification page | CodiTalk",
  description: "CodiTalk Search Page",
};
const Notification = () => {
  return (
    <div>
      <NotificationBar />
    </div>
  );
};

export default Notification;
