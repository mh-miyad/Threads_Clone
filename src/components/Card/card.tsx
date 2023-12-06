import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
const CardComp = () => {
  return (
    <Card
      key="1"
      className="w-72 md:w-96 lg:w-[500px]  mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-3xl m-3"
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
                <IconHeart className="h-6 w-6 text-red-500" />
                <span className="ml-1 text-red-500">566</span>
              </div>
              <div className="flex items-center">
                <IconMessage className="h-6 w-6 text-green-500" />
                <span className="ml-1 text-green-500">241</span>
              </div>
              <div className="flex items-center">
                <IconRepeat className="h-6 w-6 text-blue-500" />
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
function IconHeart(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function IconMessage(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

export function IconRepeat(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}
