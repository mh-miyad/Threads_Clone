import React, { useState } from "react";

const FollowBtn = () => {
  const [disable, setDisable] = useState(true);
  return (
    <button
      className={` lowercase bg-violet-500 ${
        disable
          ? "bg-violet-500 text-white ring-2 ring-violet-700"
          : "bg-white/90 text-black border  ring-2 ring-violet-500 opacity-80"
      }  px-4 py-1 rounded-full scale-95 hover:scale-100 transition-all ease-linear duration-200 text-lg active:scale-90`}
      onClick={() => setDisable(!disable)}
    >
      {disable ? "follow" : "following"}
    </button>
  );
};

export default FollowBtn;
