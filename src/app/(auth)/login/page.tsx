"use client";
import DarkBtn from "@/components/DarkMood/DarkBtn";
import React from "react";

const LoginPage = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="">
      <div className="fixed z-50 top-10 right-12 flex justify-between mb-10">
        <div></div>
        <DarkBtn />
      </div>
      <div className="flex justify-center h-[40vh] items-center">
        <div>
          <h2 className="text-3xl bg-gradient-to-b  px-10 py-2 rounded-full text-white from-pink-500 to-violet-500 font-bold uppercase">
            {" "}
            Please Login{" "}
          </h2>

          <div>
            <form onSubmit={onSubmit}>
              <div className=" w-full max-w-xs mt-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  formNoValidate
                  className=" w-full focus:outline-none h-10 py-6 border-2 border-violet-300 rounded-xl px-4 mb-4 scale-90 focus:scale-100 focus-within:border-violet-500 transition-all ease-linear duration-300 text-black "
                />
              </div>
              <div className=" w-full max-w-xs mb-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  formNoValidate
                  className=" w-full focus:outline-none h-10 py-6 border-2 border-violet-300 rounded-xl px-4 mb-4 scale-90 focus:scale-100 focus-within:border-violet-500 transition-all ease-linear duration-300 text-black "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
