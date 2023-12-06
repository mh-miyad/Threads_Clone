import CardComp from "@/components/Card/card";

export default function Home() {
  return (
    <>
      <div className="text-7xl text-center bg-red-500 text-white ">
        {" "}
        hello world{" "}
      </div>
      <div className="flex justify-center flex-col gap-10">
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
      </div>
    </>
  );
}
