import React, { useState } from "react";
import { FaAppleWhole } from "react-icons/fa6";
import { GiCoolSpices } from "react-icons/gi";
import { VscMirror } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GiPowder } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdMicrowave } from "react-icons/md";
const categories = [
  {
    icon: FaAppleWhole,
    text: "Dry Fruits",
    link: "/dry-fruits",
    subcategory: [
      {
        subcategoryName: "Almonds",
      },
      { subcategoryName: "Raisins" },
      { subcategoryName: "Munnakka" },
      { subcategoryName: "Nuts Dry Fruit Mix" },
      { subcategoryName: "Dry Dates" },
      { subcategoryName: "Cashew nut" },
      { subcategoryName: "Roasted Pistachios" },
      { subcategoryName: "Akhroat" },
      { subcategoryName: "Makhana" },
      { subcategoryName: "Dried fig Anjeer" },
      { subcategoryName: "Peanut" },
    ]
  },
  {
    icon: GiCoolSpices,
    text: "Caring Products",
    link: "/Caring Products",
    subcategory: [
      {
        subcategoryName: "Baby Care"
      },
      {
        subcategoryName: "Home Care",
      },
      {
        subcategoryName: "Hair Care"
      },
      {
        subcategoryName: "Skin Care"
      },
    ],
  },
  { icon: VscMirror, text: "Fashion", link: "/fashion" },
  {
    icon: GiPowder, text: "Caring Product", link: "/beauty", subcategory: [
      {
        subcategoryName: "Almonds",
        againSubCategory: [
          { subcategoryName: "Almonds" },
          { subcategoryName: "Raisins" },
          { subcategoryName: "Munnakka" },
          { subcategoryName: "Nuts Dry Fruit Mix" },
        ],
      },
      {
        subcategoryName: "Raisins", againSubCategory: [
          { subcategoryName: "Almonds" },
          { subcategoryName: "Raisins" },
          { subcategoryName: "Munnakka" },
          { subcategoryName: "Nuts Dry Fruit Mix" },
        ],
      },
      { subcategoryName: "Munnakka" },
      { subcategoryName: "Nuts Dry Fruit Mix" },
      { subcategoryName: "Dry Dates" },
      { subcategoryName: "Cashew nut" },
      { subcategoryName: "Roasted Pistachios" },
      { subcategoryName: "Akhroat" },
      { subcategoryName: "Makhana" },
      { subcategoryName: "Dried fig Anjeer" },
      { subcategoryName: "Peanut" },
    ],
  },
  { icon: ImSpoonKnife, text: "Kitchen", link: "/kitchen" },
  { icon: MdMicrowave, text: "Electronics", link: "/electronics" },
];
function HeaderBelowList() {
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const handleMouseEnter = (subCategory) => {
    setHoveredSubcategory(subCategory);
  };
  const handleMouseLeave = () => {
    setHoveredSubcategory(null);
  };
  return (
    <div className="flex items-center my-1 justify-center gap-x-0 sm:gap-x-12">
      {categories.map((category, index) => (
        <div key={index} className="relative group ">
          <Link
            to={category.link}
            className="text-[12px] sm:text-xl flex items-center gap-x-2"
          >
            <category.icon className="text-red-500" /> {category.text}
          </Link>
          {category.subcategory && (
            <div className="hidden  transition ease-in-out delay-700  bg-green-500 absolute top-full left-0  p-2 border border-gray-300 shadow-md rounded-md group-hover:block">
              <div className="flex flex-col space-y-2">
                {category.subcategory.map((item, subIndex) => (
                  <div
                    key={subIndex}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.subcategoryName)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="text-white">{item.subcategoryName}</Link>
                    {item.againSubCategory && hoveredSubcategory === item.subcategoryName && (
                      <div className="hidden text-black absolute top-0 left-full bg-white p-2 border border-gray-300 shadow-md rounded-md group-hover:block">
                        {item.againSubCategory.map((subItem, subSubIndex) => (
                          <div key={subSubIndex}>
                            <Link className="text-black">{subItem.subcategoryName}</Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
export default HeaderBelowList
