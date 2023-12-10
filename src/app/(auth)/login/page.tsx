"use client";
import DarkBtn from "@/components/DarkMood/DarkBtn";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className=" relative">
      <div className="fixed z-50 top-10 right-12 flex justify-between mb-10">
        <div></div>
        <DarkBtn />
      </div>
      <div className="absolute top-0  translate-y-32 -translate-x-14 rotate-45 right-12 sm:right-40 bg-gradient-to-tl from-pink-500 to-indigo-600 w-96 h-10 blur-xl -z-30">
        {" "}
      </div>
      <div className="absolute top-0  translate-y-32 translate-x-14 -rotate-45 right-12 sm:right-40 bg-gradient-to-tl from-purple-700 to-fuchsia-600 w-96 h-10 blur-xl -z-30">
        {" "}
      </div>
      <div className="absolute bottom-0  -translate-y-24 sm:right-40 -translate-x-14 -rotate-45 right-12 bg-gradient-to-tl from-purple-700 to-fuchsia-600 w-96 h-10 blur-xl -z-30">
        {" "}
      </div>
      <div className="absolute bottom-0  -translate-y-24 sm:right-40 translate-x-14 rotate-45 right-12 bg-gradient-to-tl from-purple-700 to-fuchsia-600 w-96 h-10 blur-xl -z-30">
        {" "}
      </div>
      <div className="flex justify-center h-[40vh] md:h-[60vh] items-center">
        <div className="bg-black/10 dark:bg-white/5 backdrop-blur-3xl rounded-lg px-8 pt-10 pb-20  border-2 border-violet-500">
          <h2 className="text-3xl bg-gradient-to-b  px-10 py-2 rounded-full text-white from-pink-500 to-violet-500 font-bold uppercase">
            {" "}
            Please Login{" "}
          </h2>

          <div className="z-50 relative">
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
                  className=" w-full focus:outline-none h-10 py-6 border-2 border-violet-300 rounded-xl px-4  scale-90 focus:scale-100 focus-within:border-violet-500 transition-all ease-linear duration-300 text-black "
                />
              </div>
              <div className=" w-full max-w-xs mb-5 px-4 flex gap-3 ">
                <div>{`Don't`} have an account?</div>
                <Link
                  href={`/register`}
                  className="underline underline-offset-8 text-violet-500 font-extrabold"
                >
                  Register
                </Link>
              </div>
              <button
                type="submit"
                className=" w-full max-w-xs border-2 border-fuchsia-500 dark:bg-white/10 backdrop-blur-3xl rounded-lg px-8 py-2  font-bold uppercase text-white active:scale-90 transition-all duration-200 ease-linear "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
