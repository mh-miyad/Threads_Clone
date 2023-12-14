"use client";
import { AuthContext } from "@/Provider/ContextApi";
import { Dialog } from "@headlessui/react";
import { Avatar, Tabs } from "keep-react";
import React, { useContext, useEffect, useState } from "react";
import { SiAngular, SiJavascript, SiReact, SiVuedotjs } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
const ProfileComp = () => {
  const { user } = useContext(AuthContext);

  let [isOpen, setIsOpen] = useState(true);

  // The empty dependency array ensures that the effect runs only once on mount
  console.log(user);
  return (
    <>
      <div className="relative max-w-full w-full lg:max-w-2xl my-10 lg:px-10 ">
        {/* This is the main div that contains all the content */}
        <div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <h1
                className="text-2xl lg:text-3xl font-semibold text-gray-700 
              bg-gradient-to-tr text-clip bg-clip-text text-transparent from-fuchsia-500 to-violet-500
              drop-shadow-2xl"
              >
                Mahamudul hasan Miyad
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 lg:text-lg dark:text-white/80">
                {user?.email}
                <span className="drop-shadow-2xl rounded-md font-light lg:leading-loose inline-block lg:px-1 text-xs text-white bg-gradient-to-br from-purple-500 to-indigo-400 px-2">
                  .codeTalkies
                </span>{" "}
              </p>
            </div>
            <div className="">
              <Avatar shape="circle" size="2xl" className="bg-indigo-500" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className=" dark:text-white text-neutral-600 flex gap-2 items-center">
              <span className="text-black/70 dark:text-white font-extrabold text-sm">
                {1200}
                {1200 >= 0 && 121 <= 999
                  ? ""
                  : 1200 >= 1000 && 121 <= 999999
                  ? "k"
                  : 1200 >= 1000000 && 121 <= 999999999
                  ? "M"
                  : "B"}
              </span>{" "}
              <span className="text-sm">Follower</span>
            </div>
            <div className=" dark:text-white text-neutral-600">
              <span className="text-sm sm:text-xl lg:text-2xl">
                Front End Developer
              </span>
              <div className="flex justify-around items-center gap-4">
                <span>
                  <SiJavascript
                    key={`javascript`}
                    size="30"
                    className="text-yellow-500 bg-black"
                  />
                </span>
                <span>
                  <SiReact
                    key={`javascript`}
                    size="30"
                    className="text-sky-400"
                  />
                </span>
                <span>
                  <SiAngular
                    key={`Angular`}
                    size="30"
                    className="text-red-600"
                  />
                </span>
                <span>
                  <SiVuedotjs
                    key={`Angular`}
                    size="30"
                    className="text-green-600"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* This is the main div that contains all the content */}
      </div>

      <div className=" text-center">
        <button
          className="w-full bg-gradient-to-br from-purple-500 to-indigo-400 text-white font-semibold py-2 px-4 rounded-md "
          onClick={() => setIsOpen(true)}
        >
          {" "}
          Edit Profile
        </button>
        <Tabs
          aria-label="tabs"
          style="underline"
          borderPosition="bottom"
          className="flex justify-between underline-offset-8"
        >
          <Tabs.Item className="" title="All Posts">
            Post
          </Tabs.Item>
          <Tabs.Item className="" title="My CodeTalkies">
            Dashboard content
          </Tabs.Item>
          <Tabs.Item className="" title="Project ShowCase">
            Settings content
          </Tabs.Item>
        </Tabs>
      </div>
      <div>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div
            className="fixed inset-0 flex justify-center items-center  p-4 backdrop-blur-lg bg-black/30"
            aria-hidden="true"
          >
            <Dialog.Panel className="w-full border-2 border-violet-500 max-w-xl md:max-w-lg dark:border-purple-600 bg-white dark:bg-slate-950 shadow-2xl shadow-purple-500/20  rounded-xl scale-75 md:scale-90 ">
              <div className="flex justify-end p-3">
                <IoClose
                  size={30}
                  className="border-2 border-purple-400 cursor-pointer rounded-lg p-1 bg-purple-500 text-white"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <div className="flex justify-center w-full  ">
                <UpdateProfile />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default ProfileComp;
