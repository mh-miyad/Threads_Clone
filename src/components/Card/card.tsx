import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineRetweet,
} from "react-icons/ai";

const CardComp: React.FC = () => {
  return (
    <Card
      key="1"
      className="w-72 md:w-96 lg:w-[500px] mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-3xl m-3"
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
                Chamath Palihapitiya
              </div>
              <div className="text-gray-400 dark:text-gray-300">@chamath</div>
            </div>
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            I’m in the arena trying stuff. Some will work, some won’t. But
            always learning. You’re anonymous and afraid of your own shadow.
            Enjoy the sidelines.
          </p>

          <div className="flex mt-6 justify-between items-center flex-col mx-auto md:flex-row gap-3 ">
            <div className="flex space-x-2 text-gray-400 dark:text-gray-300">
              <div className="flex items-center">
                <AiOutlineHeart className="h-6 w-6 text-red-500" />
                <span className="ml-1 text-red-500">566</span>
              </div>
              <div className="flex items-center">
                <AiOutlineMessage className="h-6 w-6 text-green-500" />
                <span className="ml-1 text-green-500">241</span>
              </div>
              <div className="flex items-center">
                <AiOutlineRetweet className="h-6 w-6 text-blue-500" />
                <span className="ml-1 text-blue-500">487</span>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-300">
              7:22 AM · Aug 22, 2023
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardComp;
