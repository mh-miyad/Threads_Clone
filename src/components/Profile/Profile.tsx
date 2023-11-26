"use client";
import { Avatar, Tabs } from "keep-react";
import React, { useEffect, useState } from "react";
import { SiAngular, SiJavascript, SiReact, SiVuedotjs } from "react-icons/si";
const ProfileComp = () => {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount(Math.floor(Math.random() * 10));
    }, 5000);

    // Cleanup function
    return () => {
      clearInterval(myInterval);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <div className="relative max-w-full w-full lg:max-w-2xl my-10 lg:px-10 ">
        {/* This is the main div that contains all the content */}
        <div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <h1 className="text-2xl lg:text-3xl font-semibold text-gray-700 drop-shadow-2xl">
                Mahamudul hasan Miyad
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 lg:text-lg">
                mahamudulhasan_miyad{" "}
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
            <div className="bg-slate-500/30 drop-shadow-2xl rounded-xl font-medium lg:inline-block p-2 text-xs lg:text-xl lg:px-4 lg:py-2 text-white bg-gradient-to-br from-purple-500 to-indigo-400 ">
              <span className="text-black/70 font-extrabold text-sm">
                {count}m
              </span>{" "}
              <span>followers</span>
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
        <button className="w-full bg-gradient-to-br from-purple-500 to-indigo-400 text-white font-semibold py-2 px-4 rounded-md ">
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
    </>
  );
};

export default ProfileComp;
