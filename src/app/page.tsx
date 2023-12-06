import CardComp from "@/components/Card/card";
import PostTool from "@/components/SticyPost/PostTool";

export default function Home() {
  return (
    <>
      <PostTool />
      <div className="flex justify-center flex-col gap-10">
        <CardComp />
      </div>
    </>
  );
}
