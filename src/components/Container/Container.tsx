"use client";
import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" max-w-screen-xl w-full h-full  mx-auto container relative  md:px-4 lg:px-5 ">
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default Container;
