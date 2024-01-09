import React from "react";

const SubscribeLetter = () => {
  return (
    <div>
      <p className="uppercase mb-6 font-semibold ">Sign up to stay updated</p>
      <p className="my-1">
        <input
          type="text"
          className="border text-black outline-none placeholder:text-[12px] rounded py-4 px-4"
          placeholder="ENTER YOUR EMAIL ADDRESS"
        />
      </p>
      <p className="my-3">
        <button className="py-2 rounded font-semibold  bg-slate-950 px-6">
          {" "}
          Subscribe{" "}
        </button>
      </p>
    </div>
  );
};

export default SubscribeLetter;
