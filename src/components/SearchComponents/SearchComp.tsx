"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchComp = () => {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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
          <div className="border-2 border-gray-600/50 overflow-hidden flex h-20 w-full  items-center rounded-lg bg-white/30 p-2 cursor-pointer">
            <Search className="ml-5 cursor-none" />
            <input
              type="text"
              className="w-full  h-16 border-none focus:outline-none p-2  "
              placeholder=" Type Here ..........."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </form>
      </div>

      <div className="  h-60 overflow-y-scroll  ">
        <h4 className="font-bold text-indigo-500 mt-5 ">
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
                <span className="uppercase font-extrabold"> 3M</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComp;
