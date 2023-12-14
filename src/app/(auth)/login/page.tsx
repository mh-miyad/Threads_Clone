"use client";
import DarkBtn from "@/components/DarkMood/DarkBtn";
import { loginUser } from "@/firebase/firebase.main";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
type Inputs = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const url = "/api/User";
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then((res) => {
        const id = res.user.uid;
        if (id) {
          axios.post(url, { email: email, password: password }).then((res) => {
            if (res.data.massage === "success") {
              toast.success("Login Successfully");
              reset();
              router.push("/");
            } else {
              toast.error(res.data.massage);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" relative">
      <div className="fixed z-50 top-10 right-12 flex justify-between mb-10">
        <div></div>
        <DarkBtn />
      </div>
      <div className="absolute top-24 right-0 bg-gradient-to-r from-pink-500 to-indigo-600 w-32 h-32 sm:w-52 sm:h-52 sm:right-20 sm:top-20 rounded-l-2xl blur-xl sm:blur-3xl -z-30 rounded-t-3xl -rotate-90 animate-pulse  delay-300 transition-all ">
        {" "}
      </div>
      <div className="absolute bottom-24 left-0 bg-gradient-to-r from-indigo-500 to-rose-600 w-32 h-32 sm:w-52 sm:h-52 sm:left-20 sm:bottom-20  -z-30 rounded-t-3xl blur-xl rotate-90 rounded-r-2xl sm:blur-3xl animate-pulse  delay-150 transition-all ">
        {" "}
      </div>

      <div className="flex justify-center h-[80vh] md:h-[60vh] items-center">
        <div className="bg-black/10 dark:bg-white/5 backdrop-blur-3xl rounded-lg px-8 pt-10 pb-20  border-2 border-violet-500">
          <h2 className="text-center md:text-3xl bg-gradient-to-b py-2 sm:px-10 sm:py-2 rounded-full text-white from-pink-500 to-violet-500 font-bold uppercase animate-pulse delay-500 transition-all">
            {" "}
            Please Login{" "}
          </h2>

          <div className="z-50 relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" w-full max-w-xs mt-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                  className=" w-full focus:outline-none h-10 py-6 border-2 border-violet-300 rounded-xl px-4 mb-4 scale-90 focus:scale-100 focus-within:border-violet-500 transition-all ease-linear duration-300 text-black "
                />
              </div>
              <div className=" w-full max-w-xs mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className=" w-full focus:outline-none h-10 py-6 border-2 border-violet-300 rounded-xl px-4  scale-90 focus:scale-100 focus-within:border-violet-500 transition-all ease-linear duration-300 text-black "
                />
              </div>
              <div className=" w-full max-w-xs mb-5 px-4 flex gap-3 ">
                <div>{`Don't`} have an account?</div>
                <Link
                  href={`/register`}
                  className="underline underline-offset-8 text-violet-700 dark:text-violet-400/80 drop-shadow-2xl font-extrabold"
                >
                  Register
                </Link>
              </div>
              <button
                type="submit"
                className=" w-full max-w-xs border-2 border-fuchsia-500 dark:bg-white/20  shadow-lg  backdrop-blur-3xl shadow-indigo-500/20  rounded-lg px-8 py-2  font-bold uppercase text-white active:scale-90 transition-all duration-200 ease-linear "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default LoginPage;
