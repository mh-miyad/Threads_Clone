"use client";
import { Avatar, Tabs } from "keep-react";
import React, { useEffect, useState } from "react";
import { SiAngular, SiJavascript, SiReact, SiVuedotjs } from "react-icons/si";
const ProfileComp = () => {
  const [count, setCount] = useState(900);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount(Math.floor(Math.random() * 1000));
    }, 2000);

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
              <h1
                className="text-2xl lg:text-3xl font-semibold text-gray-700 
              bg-gradient-to-tr text-clip bg-clip-text text-transparent from-fuchsia-500 to-violet-500
              drop-shadow-2xl"
              >
                Mahamudul hasan Miyad
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 lg:text-lg dark:text-white/80">
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
            <div className=" dark:text-white text-neutral-600 flex gap-2 items-center">
              <span className="text-black/70 font-extrabold text-sm">
                {count}
                {count >= 0 && count <= 999
                  ? ""
                  : count >= 1000 && count <= 999999
                  ? "k"
                  : count >= 1000000 && count <= 999999999
                  ? "M"
                  : "B"}
              </span>{" "}
              <span>Follower</span>
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
