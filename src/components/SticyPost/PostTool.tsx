"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  post: string;
};

const PostTool = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="mt-5 mb-10">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <textarea
            className="resize-none w-full md:h-40 h-28 focus-within:ring focus-within:ring-fuchsia-400 dark:focus-within:ring-violet-600 dark:bg-transparent border-2 border-purple-400 rounded-lg p-5 dark:border-violet-900 focus:outline-none scale-90 focus:scale-100 transition-all duration-200 ease-in-out"
            placeholder="Write something..."
            {...register("post")}
          />

          <input
            type="submit"
            className=" bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full shadow-lg dark:shadow-purple-500/50 drop-shadow-2xl shadow-violet-600/50 w-28 h-10 uppercase scale-100 active:scale-90 transition-all duration-200 ease-in-out cursor-pointer mx-auto ml-8"
          />
        </form>
      </div>
    </div>
  );
};

export default PostTool;
