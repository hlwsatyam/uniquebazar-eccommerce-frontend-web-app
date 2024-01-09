import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopProductList = () => {
  const [items, setItems] = useState([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (!response || !response.data || !Array.isArray(response.data)) {
          throw new Error("Invalid response format");
        }
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchItems();
  }, []);

  const renderCarouselItems = () => {
    return items.map((item) => (
      <div className="p-3  " key={item.id}>
        <div className="border h-[300px] p-2 rounded-[30px] ">
          <img
            src={item.image}
            className="w-[200px] m-auto h-[200px]"
            alt={item.title}
          />
          <div>
            <h3 className=" font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
              {item.title}
            </h3>
          </div>
          <div>
            <h3 className="text-xl font-bold">₹{item.price}</h3>
          </div>
          <div>
            <button className="border rounded-full w-full font-bold">
              Add +
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="slick-arrow z-50 absolute top-1/2 right-4 bg-red-700 p-4  rounded-full transform -translate-y-1/2 text-black"
    >
      <FaArrowRight className="text-white" />
    </button>
  );

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="slick-arrow  absolute top-1/2 left-4 transform bg-red-700 p-4 z-[999] rounded-full -translate-y-1/2 text-black"
    >
      <FaArrowLeft className="text-white" />
    </button>
  );

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 5,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    accessibility: true, // Enable arrow key navigation
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="  overflow-hidden">
      <div className="mx-auto max-w-full px-12  relative">
        <Slider
          {...slickSettings}
          afterChange={(index) => setActiveSlideIndex(index)}
        >
          {renderCarouselItems()}
        </Slider>
      </div>
    </div>
  );
};

export default TopProductList;
