import React, { useState } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";

const PostCard = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="max-w-xs mx-auto ">
      <Card className="shadow-lg shadow-indigo-500/30 dark:shadow-violet-500/40">
        <div className="flex flex-col p-5 ">
          <div className="flex justify-between ">
            <Image
              src={"https://i.pravatar.cc/300"}
              alt="coffee"
              width={50}
              height={50}
              className="rounded-full mb-3 "
            />
            <div className="relative">
              <button onClick={() => setMenu(!menu)}>
                <HiDotsHorizontal className="text-xl text-fuchsia-500 cursor-pointer" />
                <span className="sr-only">menu</span>
              </button>
              <div className="absolute -bottom-10  right-0">
                {menu && (
                  <>
                    <ul className="bg-gray-100/40 dark:bg-black/10 dark:border p-2 rounded-lg text-black backdrop-blur-sm dark:text-white">
                      <li className="px-2 font-bold cursor-pointer hover:text-violet-600 ">
                        Edit
                      </li>

                      <li className="px-2 font-bold cursor-pointer py-1 hover:text-violet-600 ">
                        Delete
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
          {`  "Coffee is fuel, sleep is a bug fix." ☕
"The best code is no code at all." ✨`}
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
