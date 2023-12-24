"use client";
import React, { useContext, useEffect, useState } from "react";
import { TbHome2, TbHeartCode } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearchCode } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import logo from "../../../public/C.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import DarkBtn from "../DarkMood/DarkBtn";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "@/Redux/Utils/utilSilcer";

import Modal from "../Modal/Modal";
import { AuthContext } from "@/Provider/ContextApi";
import { RootState } from "@/Redux/Store";
import { logout } from "@/firebase/firebase.main";
import Cookie from "js-cookie";
import toast from "react-hot-toast";
import { Avatar, Dropdown, Spinner } from "keep-react";
import { useUserFindNameQuery } from "@/Redux/AsyncThunk/user";
const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  // const isOpen = useSelector((state: RootState) => state.utils.isOpen);
  const dispatch = useDispatch();
  const { user, loading, setLoading } = useContext(AuthContext);
  const { data, isLoading } = useUserFindNameQuery(`${user?.email}`, {
    refetchOnReconnect: true,
  });
  const userMain = data?.data.filter((ele: any) => ele.email === user?.email);
  const [openMenu, setOpenMenu] = useState(false);
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {path === "/login" || path === "/register" ? (
        <></>
      ) : (
        <>
          <div className="">
            <nav className="z-50 transition-all ease-linear duration-200 flex  justify-around items-center fixed mx-auto top-0  left-0  text-black dark:text-gray-200 bg-white/50 backdrop-blur-lg py-3 dark:bg-slate-950 px-10  w-full lg:px-20  rounded-xl border-b-2 border-blue-500/20 ">
              <div className="md:hidden"></div>
              <div className="">
                <Link href={"/"}>
                  <Image
                    src={logo}
                    alt="Logo"
                    className="cursor-pointer  p-1  w-12 h-12  "
                  />
                </Link>
              </div>
              <div className="hidden md:block">
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
                </ul>
              </div>
              <div>
                <span className="sr-only">fix </span>
              </div>
              <div className="hidden md:block">
                {loading ? (
                  <>
                    <Spinner color="purple" size="lg" />
                  </>
                ) : (
                  <>
                    <button
                      className="relative"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <Avatar
                        shape="circle"
                        size="lg"
                        img={`${userMain?.map((ele: any) => ele.image)}`}
                        className="ring-2 ring-indigo-500 ring-offset-1 dark:ring-violet-600 scale-75 hover:scale-100 transition-all ease-linear duration-200"
                      />
                      <div className="sr-only">ss</div>
                    </button>
                    <div>
                      {showMenu && (
                        <div className="border px-3 absolute right-12 top-16 z-50 dark:bg-slate-950/80 backdrop-blur-xl rounded-lg text-black dark:text-white bg-white/70">
                          <Dropdown.Item
                            className="scale-90 hover:scale-100 transition-all ease-linear duration-200"
                            onClick={async () => {
                              logout();
                              await Cookie.remove("token");
                              router.push("/login");
                              toast.success("Logout Successfully");
                            }}
                          >
                            Sign out
                          </Dropdown.Item>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </nav>

            <div className="md:hidden bottom-0 left-0 fixed w-full px-4 py-3 z-50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-lg border-t-2 border-blue-500/20 rounded-xl">
              {/* <button
                onClick={() => setOpenMenu(false)}
                className="text-4xl   w-full z-50 text-right  cursor-pointer text-red-500  font-thin scale-90 hover:scale-100 transition-all ease-linear duration-200"
              >
                <span className="border px-3 rounded-lg border-red-500 ">
                  x
                </span>
              </button> */}
              <ul className="flex justify-around  items-center px-10">
                <li className=" ">
                  <Link href={"/"} className=" ">
                    <TbHome2
                      size={35}
                      className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg   ${
                        path === "/"
                          ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white p-1"
                          : "   "
                      }  "
  `}
                    />
                    {/* <span className="text-slate-900 dark:text-gray-100  text-xl font-bold">
                      Home
                    </span> */}
                  </Link>
                </li>

                <li className=" ">
                  <Link href={"/search"} className=" ">
                    <LuSearchCode
                      size={35}
                      className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg   ${
                        path === "/search"
                          ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white p-1"
                          : "   "
                      }  "
  `}
                    />
                    {/* <span className="text-slate-900 dark:text-gray-100  text-xl font-bold">
                      Search
                    </span> */}
                  </Link>
                </li>

                <li className=" ">
                  <Link href={"/notification"} className="">
                    <TbHeartCode
                      size={34}
                      className={`  cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg   ${
                        path === "/notification"
                          ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white p-1 "
                          : "   "
                      }  "
  `}
                    />
                    {/* <span className="text-slate-900 dark:text-gray-100  text-xl font-bold ml-10">
                      Notification
                    </span> */}
                  </Link>
                </li>
                <li className="">
                  <Link href={"/profile"} className="">
                    <FaRegUser
                      size={28}
                      className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg   ${
                        path === "/profile"
                          ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white p-2"
                          : "   "
                      }  "
  `}
                    />
                    {/* <span className="text-slate-900 dark:text-gray-100  text-xl font-bold">
                      Profile
                    </span> */}
                  </Link>
                </li>

                <li className="">
                  <DarkBtn />{" "}
                </li>
                <li className="">
                  <div className="mt-2">
                    {loading ? (
                      <>
                        <Spinner color="purple" size="lg" />
                      </>
                    ) : (
                      <>
                        <button
                          className="relative top-0 right-0"
                          onClick={() => setShowMenu(!showMenu)}
                        >
                          <Avatar
                            shape="circle"
                            size="md"
                            img={`${userMain?.map((ele: any) => ele.image)}`}
                            className="ring-2 ring-indigo-500 ring-offset-1 dark:ring-violet-600 scale-75  hover:scale-100 transition-all ease-linear duration-200"
                          />
                          <div className="sr-only">ss</div>
                        </button>

                        {showMenu && (
                          <div className="border p-3 absolute -top-10 right-12 z-50 dark:bg-slate-950/80 backdrop-blur-xl rounded-lg text-black dark:text-white bg-white/70">
                            <button
                              className="scale-90 hover:scale-100 transition-all ease-linear duration-200 "
                              onClick={async () => {
                                logout();
                                await Cookie.remove("token");
                                router.push("/login");
                                toast.success("Logout Successfully");
                              }}
                            >
                              Sign Out
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
