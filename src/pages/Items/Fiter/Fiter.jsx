import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
function Fiter({}) {
  const [priceRange, setPriceRange] = useState([50, 500]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };
  return (
    <div className="border h-full rounded-[12px] p-2 sm:p-12">
      <p className="text-3xl font-extrabold border border-x-0 border-t-0 py-3">
        Filters
      </p>
      <div className="border border-x-0 border-t-0">
        <p className="text-xl font-bold   py-3">Categories</p>
        <p className="my-4">
          {" "}
          <input type="checkbox" name="" id="" /> <span>Apple</span>
        </p>
        <p className="my-4">
          {" "}
          <input type="checkbox" name="" id="" /> <span>Mungfali</span>
        </p>
        <p className="my-4">
          {" "}
          <input type="checkbox" name="" id="" /> <span>coconut</span>
        </p>
      </div>
      <div className="border border-x-0 border-t-0">
        <p className="text-xl font-bold   py-3">Brand</p>
        <p className="my-4">
          {" "}
          <input type="checkbox" name="" id="" /> <span>ABC</span>
        </p>
        <p className="my-4">
          {" "}
          <input type="checkbox" name="" id="" /> <span>BCD</span>
        </p>
        <p className="my-4">
          {" "}
          <input type="checkbox" name="" id="" /> <span>FGE</span>
        </p>
      </div>
      <div className="border border-x-0 border-t-0">
        <p className="text-xl font-bold   py-3">Price</p>
        <div className=" mx-auto mt-8">
          <Slider
            min={0}
            max={300}
            range={true}
            step={1}
            value={priceRange}
            onChange={handleSliderChange}
          />
          <div className="flex justify-between mt-4">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fiter;
