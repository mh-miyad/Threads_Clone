"use client";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import "./PostTool.css";
import { AuthContext } from "@/Provider/ContextApi";
import axios from "axios";
type Inputs = {
  post: string;
};

const PostTool = () => {
  const [isError, setError] = useState("");
  const { user } = useContext(AuthContext);
  const userMail = user?.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.post == "") {
      reset();
      setError("");
      toast.error("Please write something");

      return;
    } else if (data.post.length >= 200) {
      toast.error(" max length is 200");
      reset();

      setError("");
      return;
    }
    const post = {
      email: userMail,
      post: data.post,
    };

    axios
      .post("/api/Post", post)
      .then((res) => {
        console.log(res.data);
        setError("");
        toast.success("post is created");

        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-10 mb-5">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  flex-wrap "
        >
          {/* Register your input into the hook by invoking the "register" function */}
          <div className="focus-within:ring focus-within:ring-fuchsia-400 dark:focus-within:ring-violet-600  border-2 border-purple-400 rounded-lg p-2 dark:border-violet-900 focus:outline-none scale-90 hover:scale-100 transition-all duration-200 ease-in-out shadow-2xl shadow-violet-500/20">
            <textarea
              className="resize-none w-full  h-28 dark:bg-transparent border-none focus:outline-none py-7 px-10 scroll-smooth "
              placeholder="Write something..."
              {...register("post", { required: true })}
              maxLength={200}
              onChange={(e) => {
                setError(e.target.value);
              }}
            />

            <div className="flex justify-between items-center w-full px-10 mx-auto ">
              <div>
                {isError.length <= 200 && (
                  <span
                    className={`text-xs  ${
                      isError.length < 200
                        ? "text-slate-500"
                        : "animate-pulse text-red-500"
                    } font-semibold text-center capitalize`}
                  >
                    <span
                      className={`text-gray-600 ${
                        isError.length < 10
                          ? "text-gray-500"
                          : isError.length < 200
                          ? "text-green-500"
                          : "text-red-500 "
                      } `}
                    >
                      {" "}
                      {isError.length}
                    </span>{" "}
                    / 200 characters remaining
                  </span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className=" disabled:bg-violet-50  disabled:cursor-not-allowed disabled:text-black bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full shadow-lg dark:shadow-purple-500/50 drop-shadow-2xl shadow-violet-600/50 w-28 h-10 uppercase scale-90 active:scale-75 transition-all duration-200 ease-in-out cursor-pointer mx-auto mb-3"
                >
                  POST
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default PostTool;
