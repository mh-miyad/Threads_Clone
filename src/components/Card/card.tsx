"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineRetweet,
} from "react-icons/ai";
import Moment from "moment";
const CardComp: React.FC = () => {
  const [love, setLove] = useState(false);
  const data = {
    avatarUrl: "/placeholder.svg",
    content: "Content",
    handle: "chamath",
    username: "Chamath Palihapitiya",
    showViewTweet: true,
    post: "",
    love: 0,
    comment: 12,
    share: 12,
    time: Moment().format(" h:mm a , MMMM  YYYY"),
  };

  return (
    <>
      <Card
        key="1"
        className="w-full  lg:w-[500px] mx-auto bg-white dark:bg-slate-950 dark:border-fuchsia-500/50 rounded-xl shadow-xl overflow-hidden md:max-w-3xl m-3 dark:shadow-violet-500/10"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
          </div>
          <div className="p-8 w-full">
            <div className="flex items-center">
              <Image
                alt="Profile picture"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="ml-4">
                <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                  {data.username || "Chamath Palihapitiya"}
                </div>
                <div className="text-gray-400 dark:text-gray-300">@chamath</div>
              </div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              {data.post ||
                `${`I’m in the arena trying stuff. Some will work, some won’t. But
            always learning. You’re anonymous and afraid of your own shadow.
            Enjoy the sidelines.`}`}
            </p>

            <div className="flex text-xs justify-between items-center mt-2 ">
              <div className="flex space-x-2 text-gray-400 dark:text-gray-300">
                <div className="flex items-center ">
                  <AiOutlineHeart
                    color={`${love ? "red" : "black"}`}
                    className="h-6 w-6 text-red-500  cursor-pointer"
                    onClick={() => {
                      setLove(!love);
                    }}
                  />
                  <span className="ml-1 text-red-500">566</span>
                </div>
                <div className="flex items-center">
                  <AiOutlineMessage className="h-6 w-6 text-green-500" />
                  <span className="ml-1 text-green-500">{}</span>
                </div>
                <div className="flex items-center">
                  <AiOutlineRetweet className="h-6 w-6 text-blue-500" />
                  <span className="ml-1 text-blue-500">487</span>
                </div>
              </div>
              <div className="text-gray-400 dark:text-gray-300 uppercase">
                {data.time}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardComp;
