"use client";
import React, { useContext, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineRetweet,
} from "react-icons/ai";
import Moment from "moment";
import { AuthContext } from "@/Provider/ContextApi";
import { useUserFindNameQuery } from "@/Redux/AsyncThunk/user";
import axios from "axios";
const CardComp = ({ data }: { data: any }) => {
  const [love, setLove] = useState(false);
  const formattedDate = Moment(data.createdAt).format("MMMM Do, YYYY h:mm A");

  const { user } = useContext(AuthContext);

  const { data: userData, isLoading } = useUserFindNameQuery(`${user?.email}`, {
    refetchOnReconnect: true,
  });
  const userMain = userData?.data.filter(
    (ele: any) => ele.email === user?.email
  );

  const likeCount = async () => {
    setLove(!love);
    const updateLike = love ? "false" : "true";

    try {
      const response = await axios.put(
        "/api/Post",
        {
          userId: userMain[0]._id,
          postId: data._id,
          like: updateLike,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(data);
  return (
    <>
      <Card
        key="1"
        className="w-full  lg:w-[500px] mx-auto bg-white dark:bg-slate-950 dark:border-fuchsia-500/50 rounded-xl shadow-xl overflow-hidden md:max-w-3xl m-3 dark:shadow-violet-500/10"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
          </div>
          <div className="p-8 w-full">
            <div className="flex items-center">
              <Image
                alt="Profile picture"
                className="rounded-full"
                height="40"
                src={data?.image}
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="ml-4">
                <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                  {data?.name || "Mh-Miyad"}
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              {data.post ||
                `${`I’m in the arena trying stuff. Some will work, some won’t. But
            always learning. You’re anonymous and afraid of your own shadow.
            Enjoy the sidelines.`}`}
            </p>

            <div className="flex text-xs justify-between items-center mt-2 ">
              <div className="flex space-x-3 items-center text-gray-400 dark:text-gray-300">
                <div className="flex items-center ">
                  <AiOutlineHeart
                    color={`${love ? "red" : "pink"}`}
                    className="h-6 w-6 text-red-500 dark:text-white  cursor-pointer"
                    onClick={() => likeCount()}
                  />
                  <span className="ml-1 text-red-500">{data.like.length}</span>
                </div>
                <div className="flex items-center">
                  <AiOutlineMessage className="h-6 w-6 text-green-500" />
                  <span className="ml-1 text-green-500">
                    {data.like.length}
                  </span>
                </div>
                {/* <div className="flex items-center">
                  <AiOutlineRetweet className="h-6 w-6 text-blue-500" />
                  <span className="ml-1 text-blue-500">487</span>
                </div> */}
              </div>
              <div className="text-gray-400 dark:text-gray-300 uppercase">
                {formattedDate || Moment().fromNow(data.createdAt)}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardComp;
