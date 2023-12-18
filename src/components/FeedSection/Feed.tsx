"use client";
import React, { useEffect, useState } from "react";
import CardComp from "../Card/card";
import { useUserPostQuery } from "@/Redux/AsyncThunk/userPost";
import { RootState } from "@/Redux/Store";
import { useDispatch, useSelector } from "react-redux";

const Feed = () => {
  const {
    isLoading,
    data: posts,
    isError,
    refetch,
  } = useUserPostQuery(1, { refetchOnFocus: false });

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
          {posts?.data?.map((post: any) => {
            return <CardComp key={post._id} data={post} />;
          })}
        </>
      )}
    </div>
  );
};

export default Feed;
