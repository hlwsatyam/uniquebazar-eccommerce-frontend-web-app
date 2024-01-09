import React from "react";
import { FaAppleWhole } from "react-icons/fa6";
import { GiCoolSpices } from "react-icons/gi";
import { VscMirror } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GiPowder } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdMicrowave } from "react-icons/md";
function HeaderBelowList() {
  return (
    <div className="flex items-center my-2 justify-center gap-x-0 sm:gap-x-12">
      <Link
        to="/dry-fruits"
        className="text-[12px] sm:text-xl flex items-center gap-x-2 "
      >
        <FaAppleWhole className="text-red-500" /> Dry Fruits{" "}
      </Link>
      <Link className="text-[12px] sm:text-xl  flex items-center gap-x-2 ">
        {" "}
        <GiCoolSpices className="text-red-500" /> Spices
      </Link>
      <Link className="text-[12px] sm:text-xl  flex items-center gap-x-2 ">
        {" "}
        <VscMirror className="text-red-500" /> Fashion{" "}
      </Link>
      <Link className="text-[12px] sm:text-xl   flex items-center gap-x-2 ">
        {" "}
        <GiPowder className="text-red-500" /> Beauty{" "}
      </Link>
      <Link className="text-[12px] sm:text-xl   flex items-center gap-x-2 ">
        {" "}
        <ImSpoonKnife className="text-red-500" /> Kichen
      </Link>
      <Link className="text-[12px] sm:text-xl    flex items-center gap-x-2 ">
        {" "}
        <MdMicrowave className="text-red-500" /> Electronics
      </Link>
    </div>
  );
}

export default HeaderBelowList;
