"use client";
import React from "react";
import { TbHome2, TbHeartCode } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";
import { PiUserDuotone } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearchCode } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import logo from "../../../public/CodiTalk.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DarkBtn from "../DarkMood/DarkBtn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { setModal } from "@/Redux/Utils/utilSilcer";
import Modal from "../Modal/Modal";
const Navbar = () => {
  const path = usePathname();
  const isOpen = useSelector((state: RootState) => state.utils.isOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <nav className=" transition-all ease-linear duration-200 flex  justify-between items-center fixed mx-auto top-0  left-0  text-black dark:text-gray-200 bg-white/50 backdrop-blur-lg py-3 dark:bg-slate-950 px-10  w-full lg:px-20  rounded-xl border-b-2 border-blue-500/20 ">
        <div className="">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo"
              className="cursor-pointer bg-gray-400/40 p-1  w-12 h-12 rounded-sm dark:bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 dark:rounded-full "
            />
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="flex justify-around items-center space-x-14">
            <li>
              <Link href={"/"} className="mt-1">
                <TbHome2
                  size={45}
                  className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg p-2  ${
                    path === "/"
                      ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white"
                      : "   "
                  }  "
  `}
                />
              </Link>
            </li>
            <li>
              <Link href={"/search"}>
                <LuSearchCode
                  size={45}
                  className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg p-2  ${
                    path === "/search"
                      ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80"
                      : " "
                  }  "
  `}
                />
              </Link>
            </li>
            <li>
              <IoCreateOutline
                onClick={() => dispatch(setModal({ isOpen: true }))}
                size={45}
                className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg p-2  ${
                  path === "/createPost"
                    ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80"
                    : ""
                }  "
  `}
              />
            </li>
            <li>
              <Link href={"/notification"}>
                <TbHeartCode
                  size={45}
                  className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg p-2  ${
                    path === "/notification"
                      ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80"
                      : " "
                  }  "
  `}
                />
              </Link>
            </li>
            <li>
              <Link href={"/profile"}>
                <FaRegUser
                  size={45}
                  className={`cursor-pointer text-slate-900 dark:text-gray-100 rounded-lg p-2  ${
                    path === "/profile"
                      ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white"
                      : "  "
                  }  "
  `}
                />
              </Link>
            </li>
            <li>
              <DarkBtn />
            </li>
          </ul>{" "}
        </div>
        <div>
          {" "}
          <HiMenuAlt3
            size={30}
            className="cursor-pointer text-gray-900 dark:text-gray-300"
          />
        </div>
      </nav>
      <Modal />
    </div>
  );
};

export default Navbar;
