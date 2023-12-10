"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface PostProps {
  post: {
    avatarUrl: string;
    username: string;
    handle: string;
    content: string;
    showViewTweet: boolean;
  };
}

const TWITTER_URL = "https://twitter.com/username/status/123456789";

const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md md:flex md:flex-col lg:flex-row">
      <div className="flex items-center">
        <Image
          src={post?.avatarUrl}
          alt="Avatar"
          className="w-12 h-12 rounded-full mr-4 md:mr-0 md:mb-4 lg:mr-4"
        />
        <div className="md:w-full">
          <h3 className="font-bold text-lg">{post?.username}</h3>
          <span className="text-gray-500">@{post?.handle}</span>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{post?.content}</p>
      <div className="mt-4 flex flex-col md:flex-row md:justify-between">
        {post?.showViewTweet && (
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-500 hover:underline md:hidden"
          >
            View Post
          </a>
        )}
        <div className="flex items-center space-x-2 md:mt-0">
          <button
            type="button"
            onClick={handleLikeClick}
            className="flex items-center px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            {isLiked ? (
              <AiFillHeart className="mr-2 text-red-500" />
            ) : (
              <AiOutlineHeart className="mr-2 text-gray-500" />
            )}
            {isLiked && <span className="text-red-500 font-bold">1</span>}
          </button>
          {post?.showViewTweet && (
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-500 hover:underline hidden md:block"
            >
              View Post
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
