"use client";
import React from "react";
import CardComp from "../Card/card";
import { useUserPostQuery } from "@/Redux/AsyncThunk/userPost";

const Feed = () => {
  const { isLoading, data: posts, isError } = useUserPostQuery(1);
  console.log(posts?.data);
  return (
    <div>
      <div>
        <CardComp />
      </div>
    </div>
  );
};

export default Feed;
