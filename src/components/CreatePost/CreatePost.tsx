"use client";
import { Avatar } from "keep-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dropdown } from "keep-react";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";

type Inputs = {
  post: string;
  image?: string;
};
const CreatePost = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const post = data.post;
    console.log(post);
    reset();
  };
  const isImageOpen = useSelector(
    (state: RootState) => state.utils.isImageLoaded
  );
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="flex items-center gap-x-4">
        <Avatar
          shape="circle"
          size="lg"
          img="https://th.bing.com/th/id/OIP.G3vEdEjsR2D5Anjnj-C-cAHaHa?rs=1&pid=ImgDetMain"
        />
        <p className="">John Doe</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <Textarea
              placeholder="Type your message here."
              {...register("post")}
            />
            <div className=" px-10 flex items-center justify-evenly">
              <span className="text-lg uppercase font-bold">Image Url:</span>
              <input
                type="text"
                {...register("image")}
                placeholder="Image Url"
                className="border focus:outline-none border-gray-600   px-4 py-2 rounded-lg my-3  w-10/12"
              />
            </div>
          </div>
          <div className="flex justify-between items-center my-2">
            <div>
              <Dropdown
                label="Your Followers Can reply"
                size="sm"
                dismissOnClick={true}
                arrowIcon={false}
              >
                <Dropdown.Item className="dark:text-black/70 hover:bg-gray-200 font-semibold">
                  Your followers
                </Dropdown.Item>
                <Dropdown.Item className="dark:text-black/70 hover:bg-gray-200 font-semibold">
                  Profiles You Follow
                </Dropdown.Item>
                <Dropdown.Item className="dark:text-black/70 hover:bg-gray-200 font-semibold">
                  Mentioned Only{" "}
                </Dropdown.Item>
              </Dropdown>
            </div>
            <input
              type="submit"
              className="bg-gradient-to-tl  outline outline-indigo-600/40  to-purple-600 from-indigo-500 px-4 py-2 rounded-full font-bold cursor-pointer text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
