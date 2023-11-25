"use client";
import React from "react";
import { BsColumnsGap } from "react-icons/bs";
import { TbHome2, TbHeartCode } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";
import { PiUserDuotone } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearchCode } from "react-icons/lu";
import { motion } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className=" transition-all ease-linear duration-200 flex  justify-between items-center fixed mx-auto top-0  left-0  text-black dark:text-gray-200 bg-white/50 backdrop-blur-lg py-3 dark:bg-black/50 px-10  w-full lg:px-20  rounded-xl border-b-2 border-blue-500/20 ">
        <div className="">
          <Link href={"/"}>
            <BsColumnsGap
              size={30}
              className="cursor-pointer text-slate-800 animate-pulse dark:text-gray-100"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-around items-center space-x-14">
            <li>
              <Link href={"/"} className="mt-1">
                <TbHome2
                  size={45}
                  className="cursor-pointer text-slate-700 dark:text-gray-100 hover:bg-black/10 rounded-lg p-2 "
                />
              </Link>
            </li>
            <li>
              <Link href={"/search"}>
                <LuSearchCode
                  size={45}
                  className="cursor-pointer text-slate-700 dark:text-gray-100 hover:bg-black/10 rounded-lg p-2"
                />
              </Link>
            </li>
            <li>
              <Link href={"/createPost"}>
                <IoCreateOutline
                  size={45}
                  className="cursor-pointer text-slate-700 dark:text-gray-100 hover:bg-black/10 rounded-lg p-2"
                />
              </Link>
            </li>
            <li>
              <Link href={"/notification"}>
                <TbHeartCode
                  size={45}
                  className="cursor-pointer text-slate-700 dark:text-gray-100 hover:bg-black/10 rounded-lg p-2"
                />
              </Link>
            </li>
            <li>
              <Link href={"/profile"}>
                <PiUserDuotone
                  size={45}
                  className="cursor-pointer text-slate-700 dark:text-gray-100 hover:bg-black/10 rounded-lg p-2"
                />
              </Link>
            </li>
          </ul>{" "}
        </div>
        <div>
          {" "}
          <HiMenuAlt3 size={30} className="cursor-pointer text-gray-900" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
