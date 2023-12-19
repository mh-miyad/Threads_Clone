import React from "react";
import ProfileComp from "@/components/Profile/Profile";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Profile Page | CodiTalk",
  description: "CodiTalk Search Page",
};
const ProfilePage = () => {
  return (
    <div className="relative w-full ">
      <ProfileComp />
    </div>
  );
};

export default ProfilePage;
