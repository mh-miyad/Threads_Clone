import React from "react";

const BackdropFilter = () => {
  return (
    <>
      <div className="fixed top-80 right-0 bg-gradient-to-r from-violet-500 to-indigo-600 w-32 h-32 sm:w-80 sm:h-32 sm:right-20 sm:top-[300px] rounded-l-2xl blur-3xl  -z-30 rounded-t-3xl rotate-45 animate-pulse  delay-300 transition-all ">
        {" "}
      </div>
      <div className="fixed top-20 right-0 bg-gradient-to-r from-pink-600 to-orange-600 w-32 h-32 sm:w-80 sm:h-32 sm:right-20 sm:top-[600px] rounded-l-2xl blur-3xl  -z-30 rounded-t-3xl rotate-45 animate-pulse  delay-300 transition-all opacity-80 ">
        {" "}
      </div>
      <div className="fixed bottom-32 left-0 bg-gradient-to-r from-purple-500 to-rose-400 w-32 h-32 sm:w-96 sm:rounded-t-3xl  sm:h-20 sm:rotate-180 sm:left-20 sm:bottom-[160px]  -z-30 rounded-t-3xl  rotate-90 rounded-r-2xl blur-3xl animate-pulse  delay-150 transition-all ">
        {" "}
      </div>
      <div className="fixed bottom-96 left-0 bg-gradient-to-r from-green-500 to-sky-500 w-32 h-32 sm:w-96 sm:rounded-t-3xl  sm:h-20 sm:rotate-180 sm:left-20 sm:bottom-[460px]  -z-30 rounded-t-3xl  rotate-90 rounded-r-2xl blur-3xl animate-pulse  delay-150 transition-all ">
        {" "}
      </div>
    </>
  );
};

export default BackdropFilter;
