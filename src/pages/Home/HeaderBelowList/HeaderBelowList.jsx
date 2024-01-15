import React from "react";

import { FaAppleWhole } from "react-icons/fa6";
import { GiCoolSpices } from "react-icons/gi";
import { VscMirror } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GiPowder } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdMicrowave } from "react-icons/md";
const categories = [
  { icon: FaAppleWhole, text: "Dry Fruits", link: "/dry-fruits" },
  { icon: GiCoolSpices, text: "Spices", link: "/spices" },
  { icon: VscMirror, text: "Fashion", link: "/fashion" },
  { icon: GiPowder, text: "Beauty", link: "/beauty" },
  { icon: ImSpoonKnife, text: "Kitchen", link: "/kitchen" },
  { icon: MdMicrowave, text: "Electronics", link: "/electronics" },
];

function HeaderBelowList() {
  return (
    <div className="flex items-center my-1 justify-center gap-x-0 sm:gap-x-12">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={category.link}
          className="text-[12px] sm:text-xl flex items-center gap-x-2"
        >
          <category.icon className="text-red-500" /> {category.text}
        </Link>
      ))}
    </div>
  );
}

export default HeaderBelowList;
