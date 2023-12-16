"use client";
import { Avatar, Skeleton, Tooltip } from "keep-react";
import Link from "next/link";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { SiAngular, SiJavascript, SiReact, SiVuedotjs } from "react-icons/si";

const ProfileSkeleton = () => {
  return (
    <div className="flex justify-around gap-5 items-center">
      <div className="max-w-2xl   ">
        <Skeleton animation={true}>
          <Skeleton.Line className="bg-indigo-100  dark:bg-slate-800 w-40 md:w-full h-9 md:h-10" />
          <div className="w-3/4">
            <Skeleton.Line
              height="h-9"
              className="bg-indigo-100 dark:bg-slate-800"
            />
          </div>
          <Skeleton.Line
            height="h-14"
            className="bg-indigo-100 dark:bg-slate-800 w-10/12"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 gap-x-2 ">
            <Skeleton.Line
              height="h-5"
              className="bg-indigo-100 dark:bg-slate-800 w-20 "
            />

            <Skeleton.Line
              height="h-5"
              className="bg-indigo-100 dark:bg-slate-800  w-20"
            />
            <Skeleton.Line
              height="h-5"
              className="bg-indigo-100 dark:bg-slate-800  w-20"
            />
            <Skeleton.Line
              height="h-5"
              className="bg-indigo-100 dark:bg-slate-800  w-20"
            />
          </div>
        </Skeleton>
      </div>
      <div className="max-w-2xl py-5  ">
        <Skeleton animation={true}>
          <Skeleton.Line className="bg-indigo-100 md:h-40 h-20 dark:bg-slate-800 md:w-40 w-20 rounded-full ring-2 ring-violet-700 mx-auto" />
          <div className="w-full  ">
            <Skeleton.Line className="bg-indigo-100  dark:bg-slate-800 w-40 h-5 " />
          </div>
          <div className="w-full flex gap-4 ">
            <Skeleton.Line className="bg-indigo-100  dark:bg-slate-800 w-1/2 h-5" />
            <Skeleton.Line className="bg-indigo-100  dark:bg-slate-800 w-1/2 h-5" />
            <Skeleton.Line className="bg-indigo-100  dark:bg-slate-800 w-1/2 h-5" />
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
