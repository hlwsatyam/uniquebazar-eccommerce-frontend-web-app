import React from "react";
import { CiStar, CiHeart, CiShare2 } from "react-icons/ci";

const BrandNameHeader = ({ brand, brandName, noOfRatings }) => {
  return (
    <div className="p-2">
      <p className="font-bold text-blue-600 cursor-pointer">{brand}</p>
      <p className="font-semibold ">{brandName}</p>
      <div className="flex items-center justify-between">
        <RatingStar stars={5} canWeShowNOofStar={true} />
        <p className="flex items-center gap-x-4 ">
          <CiHeart className=" text-2xl cursor-pointer " />
          <CiShare2 className=" text-2xl cursor-pointer " />
        </p>
      </div>
    </div>
  );
};

export default BrandNameHeader;

const Star = ({ style }) => <CiStar className={style} />;

export const RatingStar = ({ stars, canWeShowNOofStar =true}) => {
  const starIcons = Array.from({ length: stars }, (_, index) => (
    <Star key={index} style={"text-yellow-400 text-xl"} />
  ));
  const blankStarIcons = Array.from({ length: 5 - stars }, (_, index) => (
    <Star key={index} style={"text-xl"} />
  ));

  return (
    <div className="flex items-center gap-x-1 font-bold cursor-pointer">
      {starIcons} {blankStarIcons}
      <span className="ml-1">{canWeShowNOofStar ? stars : ""}</span>
    </div>
  );
};
