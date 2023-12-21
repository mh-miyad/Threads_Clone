import React, { useEffect, useState } from "react";
import PostCard from "../Card/PostCard";
import axios from "axios";

const PostSection = ({ email }: { email: string }) => {
  const [isTabs, setIsTabs] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const userFind = async () => {
      axios.post("/api/Post/userPost", { email }).then((res) => {
        setData(res.data.data);
      });
    };
    userFind();
  }, [email]);
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
            {data?.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PostSection;
