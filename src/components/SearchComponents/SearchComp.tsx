"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchComp = () => {
  const [search, setSearch] = useState("");
  const searchItem = [
    "javaScript",
    "react",
    "node",
    "html",
    "css",
    "python",
    "java",
    "c++",
    "c",
    "php",
    "ruby",
    "kotlin",
    "swift",
    "go",
    "rust",
    "scala",
    "perl",
    "c#",
    "haskell",
    "angular",
    "vue",
    "svelte",
  ];
  return (
    <div className="  w-full  ">
      <div className="">
        <form>
          <div className="border-2 border-gray-600/50 overflow-hidden flex h-20 w-full  items-center rounded-lg bg-white/30 dark:bg-slate-900 p-2 cursor-pointer scale-95 hover:scale-100 transition-all ease-linear duration-200 hover:mb-5">
            <Search className="ml-5 cursor-none" />
            <input
              type="text"
              className="w-full  h-16 border-none focus:outline-none p-2 dark:bg-slate-950  rounded-lg focus:bg-gray-200 placeholder:text-center"
              placeholder=" Find Your Favorite Topic... Or Person... that Can Help You"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </form>
      </div>

      <div className=" max-w-2xl mx-auto w-full  h-auto  fixed bottom-0 md:left-40 lg:left-60 lg:right-56 md:right-40 top-40  overflow-y-auto px-5 transition-all ease-linear duration-200  scroll-smooth right-10 left-10 ">
        <h4 className="font-bold text-indigo-500 mt-10 ">
          {" "}
          Trending On .........
        </h4>
        <ul className=" mt-5 font-bold text-slate-600 space-y-4 transition-all ease-linear duration-200 mb-5 w-full ">
          {searchItem
            .filter((item) => item.includes(search))
            .map((item) => (
              <li
                key={item}
                className=" p-1 text-start rounded-lg  cursor-pointer text-sm lowercase transition-all flex justify-between"
                onClick={() => setSearch(item)}
              >
                <span> #{item} </span>
                <span className=" lowercase bg-violet-500 text-white px-4 py-1 rounded-full scale-95 hover:scale-100 transition-all ease-linear duration-200 text-lg active:scale-90">
                  follow
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComp;
