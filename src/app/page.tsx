"use client";
import { AuthContext } from "@/Provider/ContextApi";
import CardComp from "@/components/Card/card";
import PostTool from "@/components/SticyPost/PostTool";
import { useContext, useEffect } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import Feed from "@/components/FeedSection/Feed";
export default function Home() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    const token = Cookie.get("token");
    if (!token) {
      return router.push("/login");
    }
  }, [user, router]);
  return (
    <>
      <PostTool />
      <div className="max-w-lg w-full mx-auto ">
        <Feed />
      </div>
    </>
  );
}
