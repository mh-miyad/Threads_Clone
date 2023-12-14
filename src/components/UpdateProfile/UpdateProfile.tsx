import { AuthContext } from "@/Provider/ContextApi";
import axios from "axios";

import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface Inputs {
  name: string;
  email: string;
  bio: string;
  address: string;
  phone: string;
  profession: string;
  image: string;
  github: string;
  linkedin: string;
  portfolio: string;
  skill: string[];
}
const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [skill, setSkill] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>("");
  const handleAddSkill = () => {
    if (newSkill.trim() !== "" && !skill.includes(newSkill)) {
      if (skill.length < 5) {
        setSkill([...skill, newSkill]);
        setNewSkill("");
      } else {
        // Display a warning message or apply styling to indicate the limit has been reached
        toast.error("You can only add up to 5 skills.");
      }
    }
  };

  const handleDeleteSkill = (index: number) => {
    const updatedSkills = [...skill];
    updatedSkills.splice(index, 1);
    setSkill(updatedSkills);
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const update = {
      name: data.name,
      bio: data.bio,
      address: data.address,
      phone: data.phone,
      profession: data.profession,
      image: data.image,
      github: data.github,
      linkedin: data.linkedin,
      portfolio: data.portfolio,
      skill: skill,
    };
    const res = await axios.post(`/api/User/update`, {
      data: update,
      email: user?.email,
    });

    if (res.data.data.acknowledged) {
      toast.success("Successfully updated Your Document");
      reset();
    } else {
      toast.error(res.data.message);
      return;
    }
  };
  return (
    <div className="w-full px-2 sm:px-10 mb-4  h-full overflow-y-auto">
      <div className=" rounded-xl bg-gray-100 dark:bg-slate-900 dark:text-white  text-black p-4 shadow">
        <p className="text-sm font-bold text-gray-900">Personal Info</p>
        <form
          action=""
          className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your Full Name"
              id="fullname"
              {...register("name")}
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="fullname"
            >
              Profession
            </label>
            <select
              {...register("profession")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="frontend">Front End Developer</option>
              <option value="backend">Backend Developer </option>
              <option value="fullstack">Full Stack Developer</option>
            </select>
          </div>

          <div className="col-span-2 grid">
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="bio"
              >
                Bio
              </label>
              <textarea
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Write Your Bio"
                id="bio"
                cols={4}
                rows={3}
                maxLength={100}
                {...register("bio")}
              />
            </div>
          </div>
          <div className="col-span-2 grid">
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Address"
                id="address"
                {...register("address")}
              />
            </div>
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your Phone Number"
              id="phone"
              {...register("phone")}
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              Github
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Write Your Github URL "
              id="phone"
              {...register("github")}
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              Linkedin
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Write Your Github URL "
              id="phone"
              {...register("linkedin")}
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              Website
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="ProtFolio Website  "
              id="phone"
              {...register("portfolio")}
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              Add Your Skill
            </label>
            <div className="flex items-center">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Add Your Skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button
                type="button"
                className="ml-2 bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-300 focus-visible:ring-opacity-50"
                onClick={handleAddSkill}
              >
                Add
              </button>
            </div>
          </div>
          <div className="w-full flex flex-wrap-reverse ">
            {skill.map((skill, index) => (
              <div
                key={index}
                className="flex px-4 justify-between rounded-md p-2 text-[20px] font-semibold w-full scale-50 border border-black/30 uppercase bg-white text-black"
              >
                <p className="">{skill}</p>
                <button
                  type="button"
                  className="text-[22px] font-mono text-red-600"
                  onClick={() => handleDeleteSkill(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="col-span-2 grid">
            <button
              type="submit"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateProfile;
