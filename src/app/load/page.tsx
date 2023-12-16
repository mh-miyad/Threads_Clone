import Image from "next/image";
import React from "react";
import logo1 from "../../../public/C.svg";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen text-5xl ">
      <Image alt="loading" src={logo1} />
    </div>
  );
};

export default loading;
