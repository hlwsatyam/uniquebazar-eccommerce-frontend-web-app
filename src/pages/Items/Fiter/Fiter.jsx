import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FiltredData={
  categories:['Dry Fruits'],
  brands:[ 'Tulsi','Rvbm' ]
}


const categories =FiltredData.categories;
const brands = FiltredData.brands;

function Filter({}) {
  const [priceRange, setPriceRange] = useState([50, 500]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="border h-full rounded-[12px] p-2 sm:p-12">
      <p className="text-3xl font-extrabold border border-x-0 border-t-0 py-3">
        Filters
      </p>
      {renderCheckboxGroup("Categories", categories)}
      {renderCheckboxGroup("Brand", brands)}
      {PriceLowWithHigh({CommingVal:'lowToHigh'})}
      {renderPriceSlider()}
    </div>
  );

  function PriceLowWithHigh({ CommingVal, handleSort }) {
    const sortingOptions = [
      { label: "Low To High", value: "lowToHigh" },
      { label: "High To Low", value: "highToLow" },
    ];
   
    return (
      <div className="border border-x-0 border-t-0">
        <p className="text-xl font-bold py-3">Price</p>
        {sortingOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSort(option.value)}
            className={`text-slate-700 bg-yellow-400 my-1 ${
              CommingVal === option.value ? "active" : ""
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }
  function renderCheckboxGroup(title, items) {
    return (
      <div className="border border-x-0 border-t-0">
        <p className="text-xl font-bold py-3">{title}</p>
        {items.map((item, index) => (
          <p key={index} className="my-4 items-center flex gap-x-4 ">
            <input type="checkbox" name="" id="" />
            <span>{item}</span>
          </p>
        ))}
      </div>
    );
  }

  function renderPriceSlider() {
    return (
      <div className="border border-x-0 border-t-0">
        <p className="text-xl font-bold py-3">Price</p>
        <div className="mx-auto mt-8">
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
    );
  }
}

export default Filter;
