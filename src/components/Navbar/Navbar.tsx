"use client";
import React, { useContext, useEffect, useState } from "react";
import { TbHome2, TbHeartCode } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearchCode } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import logo from "../../../public/CodiTalk.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import DarkBtn from "../DarkMood/DarkBtn";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "@/Redux/Utils/utilSilcer";
import { CiMenuKebab } from "react-icons/ci";
import Modal from "../Modal/Modal";
import { AuthContext } from "@/Provider/ContextApi";
import { RootState } from "@/Redux/Store";
import { logout } from "@/firebase/firebase.main";
import Cookie from "js-cookie";
import toast from "react-hot-toast";
const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  // const isOpen = useSelector((state: RootState) => state.utils.isOpen);
  const dispatch = useDispatch();
  const { user, loading, setLoading } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  return (
    <>
      {path === "/login" || path === "/register" ? (
        <></>
      ) : (
        <>
          <div>
            <nav className=" transition-all ease-linear duration-200 flex  justify-between items-center fixed mx-auto top-0  left-0  text-black dark:text-gray-200 bg-white/50 backdrop-blur-lg py-3 dark:bg-slate-950 px-10  w-full lg:px-20  rounded-xl border-b-2 border-blue-500/20 ">
              <div className="md:hidden"></div>
              <div className="">
                <Link href={"/"}>
                  <Image
                    src={logo}
                    alt="Logo"
                    className="cursor-pointer bg-gray-400/40 p-1  w-12 h-12 rounded-sm dark:bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 dark:rounded-full "
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
                </ul>
              </div>
              <div className="md:hidden">
                {" "}
                <button onClick={() => setOpenMenu(!openMenu)}>
                  <p className="sr-only">menu</p>
                  <HiMenuAlt3
                    size={30}
                    className="cursor-pointer text-gray-900 dark:text-gray-300"
                  />
                </button>
              </div>
              <div className="hidden md:block">
                {loading ? (
                  <> Login...</>
                ) : (
                  <>
                    <CiMenuKebab size={30} className={`cursor-pointer`} />
                  </>
                )}
              </div>
            </nav>
            <Modal />
            <>
              {openMenu && (
                <>
                  <div
                    className={` fixed top-0 z-50 right-0 bg-white/5 w-full h-auto px-10 backdrop-blur-xl py-10 ${
                      openMenu ? "translate-x-0" : "translate-x-[100vw] "
                    }`}
                  >
                    <button
                      onClick={() => setOpenMenu(false)}
                      className="text-4xl   w-full z-50 text-right  cursor-pointer text-red-500  font-thin scale-90 hover:scale-100 transition-all ease-linear duration-200"
                    >
                      <span className="border px-3 rounded-lg border-red-500 ">
                        x
                      </span>
                    </button>
                    <ul className="flex  flex-col  space-y-12">
                      <li className="flex justify-center ">
                        <Link
                          href={"/"}
                          className="mt-1 flex items-center gap-x-10 "
                        >
                          <TbHome2
                            size={35}
                            className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg   ${
                              path === "/"
                                ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white p-1"
                                : "   "
                            }  "
  `}
                          />
                          <span className="text-slate-900 dark:text-gray-100  text-xl font-bold">
                            Home
                          </span>
                        </Link>
                      </li>

                      <li className="flex justify-center ">
                        <Link
                          href={"/search"}
                          className="mt-1 flex items-center gap-x-10 "
                        >
                          <LuSearchCode
                            size={35}
                            className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg   ${
                              path === "/search"
                                ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white p-1"
                                : "   "
                            }  "
  `}
                          />
                          <span className="text-slate-900 dark:text-gray-100  text-xl font-bold">
                            Search
                          </span>
                        </Link>
                      </li>

                      <li className="flex justify-center ">
                        <Link
                          href={"/notification"}
                          className="mt-1 flex items-center  "
                        >
                          <TbHeartCode
                            size={34}
                            className={` ml-14 cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg   ${
                              path === "/notification"
                                ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white p-1 "
                                : "   "
                            }  "
  `}
                          />
                          <span className="text-slate-900 dark:text-gray-100  text-xl font-bold ml-10">
                            Notification
                          </span>
                        </Link>
                      </li>
                      <li className="flex justify-center ">
                        <Link
                          href={"/profile"}
                          className="mt-1 flex items-center gap-x-10 "
                        >
                          <FaRegUser
                            size={35}
                            className={`cursor-pointer text-slate-700 dark:text-gray-100 rounded-lg   ${
                              path === "/profile"
                                ? "bg-gradient-to-br from-indigo-400 to-fuchsia-400/80 text-white p-2"
                                : "   "
                            }  "
  `}
                          />
                          <span className="text-slate-900 dark:text-gray-100  text-xl font-bold">
                            Profile
                          </span>
                        </Link>
                      </li>

                      {user && (
                        <li className="flex justify-center">
                          <button
                            className="text-center px-8 py-2  rounded-lg border-2 border-pink-600  dark:text-white font-semibold hover:bg-pink-600 hover:text-white translate-x-4sition-all ease-linear duration-200  scale-90 active:scale-100"
                            onClick={async () => {
                              logout();
                              await Cookie.remove("token");
                              router.push("/login");
                              toast.success("Logout Successfully");
                            }}
                          >
                            LogOut
                          </button>
                        </li>
                      )}

                      <li className="flex justify-center  items-center gap-5">
                        <DarkBtn />{" "}
                        <span className="font-bold text-gray-400 drop-shadow-2xl ">
                          {" "}
                          {isDark ? "Dark Mood" : "Light Mood"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
