"use client";
import React from "react";
import CardComp from "../Card/card";
import { useUserPostQuery } from "@/Redux/AsyncThunk/userPost";

const Feed = () => {
  const {
    isLoading,
    data: posts,
    isError,
    refetch,
  } = useUserPostQuery(1, { pollingInterval: 5000, refetchOnReconnect: true });

  if (isError) {
    return <div>Error:{isError}</div>;
  }

  return (
    <div>
      {isLoading ? (
        <>loading....</>
      ) : (
        <>
          {posts?.data?.length === 0 && (
            <div className="text-center text-3xl text-gray-400">No Post</div>
          )}
          <div className="flex flex-col-reverse justify-center ">
            {posts?.data?.map((post: any) => {
              return <CardComp key={post._id} data={post} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Feed;
