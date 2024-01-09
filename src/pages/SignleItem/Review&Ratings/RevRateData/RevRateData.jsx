import React from "react";
import { RatingStar } from "../../BrandNameHeader/BrandNameHeader";
import { FaStar } from "react-icons/fa";
const RevRateData = ({
  noOfComment,
  fiveStar,
  fourStar,
  threeStar,
  twoStar,
  oneStar,
  ...style
}) => {
  const RatingData = [
    { name: "5", rating: fiveStar },
    { name: "4", rating: fourStar },
    { name: "3", rating: threeStar },
    { name: "2", rating: twoStar },
    { name: "1", rating: oneStar },
  ];
  return (
    <div {...style}>
      <p className="text-2xl font-bold">Ratings & Reviews</p>
      <div className="flex items-center ">
        <div className="w-[50%]">
          <p className="text-3xl font-bold my-3 ">4</p>
          <RatingStar stars={4} canWeShowNOofStar={false} />
          <p className="flex "> {noOfComment} Ratings </p>
        </div>
        <div className="w-[50%]">
          {RatingData.map((item) => (
            <p className="flex items-center gap-x-3">
              {" "}
              <span className="flex items-center gap-x-2">
                {" "}
                {item.name} <FaStar />
              </span>{" "}
              <p className=" rounded bg-slate-500 h-3  w-[70%]">
                <p
                  style={{ width: `${item.rating}%` }}
                  className={`h-3 rounded  bg-yellow-400`}
                ></p>
              </p>
              <span>{item.rating}%</span>
            </p>
          ))}
        </div>
      </div>
      <p className="text-2xl my-3 font-bold">Review this product</p>
      <p className="font-semibold my-3 text-gray-600">
        Help others make an informed decision!
      </p>
      <div>
        <input
          type="text"
          placeholder="Subject Of Comment"
          className="w-full border-2 my-1 py-2 px-2 placeholder:text-green-600 font-semibold text-[12px] rounded-full outline-none "
        />
        <input
          type="text"
          placeholder="Description Of Comment"
          className="w-full border-2 my-1 py-2 px-2 placeholder:text-green-600 font-semibold text-[12px] rounded-full outline-none "
        />

        <button
          type="button"
          className="text-[14px] my-2 transition ease-in-out duration-700 font-bold w-full text-center hover:bg-yellow-400 border rounded py-2 px-2 border-x-yellow-400 border-x-2"
        >
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default RevRateData;
