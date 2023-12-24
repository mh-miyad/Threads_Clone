import React from "react";

const BackdropFilter = () => {
  return (
    <>
      <div className="fixed top-60 right-0 bg-gradient-to-r from-violet-500 to-green-600 w-32 h-32 sm:w-52 sm:h-52 sm:right-20 sm:top-20 rounded-l-2xl blur-2xl sm:blur-3xl -z-30 rounded-t-3xl -rotate-90 animate-pulse  delay-300 transition-all  opacity-90">
        {" "}
      </div>
      <div className="fixed top-80 left-0 bg-gradient-to-r from-indigo-500 to-emerald-400 w-32 h-32 sm:w-52 sm:h-52 sm:left-20 sm:bottom-20  -z-30 rounded-t-3xl blur-xl rotate-90 rounded-r-2xl sm:blur-3xl animate-pulse  delay-150 transition-all ">
        {" "}
      </div>
      <div className="fixed top-72 right-0 bg-gradient-to-r from-violet-500 to-indigo-600 w-[500px] h-10 sm:w-[600px] sm:h-10 sm:right-[20px] sm:top-[500px] rounded-l-2xl blur-2xl sm:blur-3xl -z-30 rounded-t-3xl -rotate-45 animate-pulse  delay-300 transition-all ">
        {" "}
      </div>
      <div className="fixed -top-72 left-0 bg-gradient-to-r from-green-500 to-sky-600 w-[500px] h-10 sm:w-[600px] sm:h-10 sm:left-[20px] sm:top-[500px] rounded-l-2xl blur-2xl sm:blur-3xl -z-30 rounded-t-3xl rotate-45 animate-pulse  delay-300 transition-all ">
        {" "}
      </div>
    </>
  );
};

export default BackdropFilter;
