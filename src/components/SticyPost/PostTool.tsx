"use client";
import React, { useState } from "react";
import EmojiPicker, { Theme } from "emoji-picker-react";

const PostTool = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [post, setPost] = useState({
    post: "",
  });
  const [emoji, setEmoji] = useState("");
  console.log(typeof emoji);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPost({
      post: "",
    });
  };

  return (
    <div>
      <form action="#" className="w-full relative" onSubmit={handleSubmit}>
        <div className="w-full md:w-10/12 mx-auto">
          <div className="border p-2">
            <textarea
              className="w-full focus:outline-none resize-none"
              placeholder="Write something..."
              rows={4}
              value={post.post}
              onChange={(e) => {
                setPost((prev) => ({
                  ...prev,
                  post: e.target.value && emoji, // Clear the emoji object after selection
                }));
              }}
            />
          </div>
          <div className="flex justify-around">
            <button
              className="p-1 text-3xl hover:bg-slate-100 scale-105 active:scale-90 text-white rounded-full"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              😉
            </button>
            {showEmojiPicker && (
              <div className="absolute z-50">
                <EmojiPicker
                  theme={Theme.AUTO}
                  onEmojiClick={({ emoji }) => {
                    setEmoji((prev) => {
                      return prev + emoji;
                    });
                  }}
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostTool;
