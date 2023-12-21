"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Cookie from "js-cookie";
import { Caveat } from "next/font/google";
import { AuthContext } from "@/Provider/ContextApi";
import { Dialog } from "@headlessui/react";
import { BiLogoGmail } from "react-icons/bi";
import { Avatar, Tabs, Tooltip } from "keep-react";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { Upload } from "keep-react";

import { IoClose } from "react-icons/io5";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import { useUserFindNameQuery } from "@/Redux/AsyncThunk/user";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import ProfileSkeleton from "./ProfileSkeleton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateAvatar } from "@/Redux/Utils/utilSilcer";
import SkillSection from "../SkillSection/SkillSection";
import PostSection from "../PostSection/PostSection";
const inter = Caveat({ subsets: ["latin"], weight: "700" });
const ProfileComp = () => {
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;
  const [isLoading1, setIsLoading1] = useState(true);
  const { data, isLoading } = useUserFindNameQuery(`${user?.email}`, {
    pollingInterval: 10000,
  });
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const userMain = data?.data.filter((ele: any) => ele.email === email);

  const userId = userMain?.map((ele: any) => ele._id);
  useEffect(() => {
    if (!userId) {
      setIsLoading1(true);
    } else {
      setIsLoading1(false);
    }
  }, [userId, userMain, user]);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const handleFileChange = async (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
      setIsLoading1(true);
      axios
        .post(`/api/upload?filename=${file.name}`, file)
        .then((res) => {
          if (res.data.url) {
            toast.success("Image uploaded successfully");
            setImage(res.data.url);
            axios
              .post("/api/User/image", {
                url: res.data.url,
                id: user?.email,
              })
              .then((res) => {
                if (res.data.data.modifiedCount > 0) {
                  toast.success("Image uploaded successfully");
                  dispatch(updateAvatar({ avatar: true }));
                  setOpen(false);
                  setIsLoading1(false);
                }
              });
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const router = useRouter();
  useEffect(() => {
    const token = Cookie.get("token");
    if (!token) {
      return router.push("/login");
    }
  }, [user, router]);
  return (
    <>
      {loading && isLoading1 && isLoading ? (
        <>
          <ProfileSkeleton />
        </>
      ) : (
        <>
          <div className="relative max-w-full w-full lg:max-w-2xl mt-10 mb-14 lg:px-10 top-10 ">
            {/* This is the main div that contains all the content */}
            <div>
              <div className="flex justify-between items-center mb-5 mt-10 ">
                <div>
                  <h1
                    className="text-2xl lg:text-3xl font-semibold text-gray-700 
            bg-gradient-to-tr text-clip bg-clip-text text-transparent from-fuchsia-500 to-violet-500
            drop-shadow-2xl"
                  >
                    {userMain?.map((ele: any) => ele.name)}
                  </h1>
                  <p className="text-xs lowercase sm:text-sm text-gray-500 lg:text-lg dark:text-white/80">
                    {userMain?.map((ele: any) => ele.userName) || "@username"}
                    <span className="drop-shadow-2xl rounded-md font-light lg:leading-loose inline-block lg:px-1 text-xs text-white bg-gradient-to-br from-purple-500 to-indigo-400 px-2">
                      <span className="font-extrabold mr-1">.</span>codeTalkies
                    </span>{" "}
                  </p>
                </div>
                <div className="">
                  {isLoading ? (
                    <Avatar
                      shape="circle"
                      size="2xl"
                      className="bg-indigo-500 cursor-pointer  animate-pulse"
                    />
                  ) : (
                    <Avatar
                      shape="circle"
                      size="2xl"
                      img={`${userMain?.map((ele: any) => ele.image)}` || image}
                      className="bg-indigo-500 cursor-pointer "
                      onClick={() => setOpen(true)}
                    />
                  )}
                  {open && (
                    <div
                      className="absolute top-10 right-0 bg-black/10  dark:bg-white/5 rounded backdrop-blur-2xl scale-[.7]  w-full "
                      aria-hidden="true"
                    >
                      <Upload
                        id="upload"
                        file={fileName}
                        fileType="image/*"
                        onFileChange={handleFileChange}
                        uploadTime="2 minutes"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex gap-2 items-center text-xs md:text-xl break-words font-semibold text-gray-500">
                    <p className={inter.className}>
                      {userMain?.map((ele: any) => ele.bio)}
                    </p>
                  </div>
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
                  <div className="flex justify-evenly items-center">
                    <Link
                      href={`mailto:${userMain?.map((ele: any) => ele.email)}`}
                    >
                      <Tooltip
                        content="Gmail"
                        animation="duration-100"
                        style="light"
                        trigger="hover"
                        placement="bottom-end"
                      >
                        <BiLogoGmail
                          className={`mt-4 text-lg md:text-2xl lg:text-3xl text-fuchsia-600 `}
                        />
                      </Tooltip>
                    </Link>
                    <Link
                      href={`${userMain?.map((ele: any) => ele?.portfolio)}`}
                    >
                      <Tooltip
                        content="Website"
                        animation="duration-100"
                        trigger="hover"
                        placement="bottom-end"
                        style="dark"
                      >
                        <FaLink
                          className={`mt-4 text-lg md:text-2xl lg:text-3xl mx-2 text-violet-600`}
                        />
                      </Tooltip>
                    </Link>
                    <Link href={`${userMain?.map((ele: any) => ele?.github)}`}>
                      <Tooltip
                        content="GitHub"
                        animation="duration-100"
                        trigger="hover"
                        placement="bottom-end"
                        style="dark"
                      >
                        <FaGithub
                          className={`mt-4 text-lg md:text-2xl lg:text-3xl mx-2 `}
                        />
                      </Tooltip>
                    </Link>
                    <Link
                      href={`${userMain?.map((ele: any) => ele?.linkedin)}`}
                    >
                      <Tooltip
                        content="Linkedin"
                        animation="duration-100"
                        trigger="hover"
                        placement="bottom-end"
                        style="dark"
                      >
                        <FaLinkedin
                          className={`mt-4 text-lg md:text-2xl lg:text-3xl mx-2 text-sky-500 `}
                        />
                      </Tooltip>
                    </Link>
                  </div>
                </div>
                <div className=" dark:text-white text-neutral-600">
                  <span className="text-sm sm:text-xl lg:text-2xl font-semibold">
                    {`${userMain?.map((ele: any) => ele.profession)}` ===
                    "backend"
                      ? "Backend Developer"
                      : `${userMain?.map((ele: any) => ele.profession)}` ===
                        "frontend"
                      ? "Frontend Developer"
                      : "FullStack  Developer"}
                  </span>
                  <SkillSection
                    frontEndSkills={userMain?.map((ele: any) => ele.skill)}
                  />
                </div>
              </div>
            </div>
            {/* This is the main div that contains all the content */}
          </div>
        </>
      )}

      <div className=" text-center space-y-5 overflow-hidden">
        <button
          className="w-full bg-gradient-to-br from-purple-500 to-indigo-400 text-white font-semibold py-2 px-4 rounded-md "
          onClick={() => setIsOpen(true)}
        >
          {" "}
          Edit Profile
        </button>
        <PostSection />
      </div>
      <div>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div
            className=" left-0 top-0 w-full h-[100vh] absolute flex overflow-auto justify-center items-center  p-4 backdrop-blur-lg bg-black/30 scroll-smooth transition-all delay-150 duration-200 ease-in-out"
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
                <UpdateProfile setIsOpen={setIsOpen} />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default ProfileComp;
