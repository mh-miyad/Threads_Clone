import Image from "next/image";
import React from "react";
import logo1 from "../../public/C.svg";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] scale-50">
      <Image
        alt="loading"
        src={logo1}
        className="w-40 h-40 opacity-10 animate-pulse drop-shadow-2xl  "
      />
      <p className="text-5xl font-extrabold animate-pulse caption-top  text-clip text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-500 opacity-30 drop-shadow-2xl font-sans">
        CodiTalk
      </p>
    </div>
  );
};

export default loading;
