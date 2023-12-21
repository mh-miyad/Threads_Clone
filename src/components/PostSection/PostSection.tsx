import React, { useState } from "react";
import PostCard from "../Card/PostCard";

const PostSection = () => {
  const [isTabs, setIsTabs] = useState(true);
  return (
    <>
      <div className="relative">
        <div>
          <button
            className={`${
              isTabs ? "border-b-2 border-violet-500" : ""
            } px-4 transition-all ease-linear duration-50 font-bold`}
          >
            All Post{" "}
          </button>
        </div>
        <div className="transition-all ease-linear duration-100 relative w-full h-[1.5px] bg-gradient-to-br from-purple-500 to-indigo-400 "></div>
      </div>
      {/* Here Post card that user post in his profile */}
      {isTabs && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </>
      )}
    </>
  );
};

export default PostSection;
