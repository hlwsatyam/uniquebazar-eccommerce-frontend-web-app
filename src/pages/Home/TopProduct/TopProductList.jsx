import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  addToCartLocalHost,
  getLatestCart,
} from "../../../components/Fetchings/LocalHost";

const TopProductList = ({ category, title, page = 1 }) => {
  const [items, setItems] = useState([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/latestproduct?page=1&categories%5B%5D=dry_fruits&categories%5B%5D=home_care&product_title=my_title `
        );
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
  // const addToCart = (id) => {
  //   addToCartLocalHost(id);
  // };

  const [cart, setCart] = useState(getLatestCart());

  const addToCart = (productId) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === productId);

    if (index !== -1) {
      // Remove item from cart if it already exists
      updatedCart.splice(index, 1);
    } else {
      // Add item to cart if it doesn't exist
      updatedCart.push({ id: productId /* other properties */ });
    }

    // Update the state and localStorage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const renderCarouselItems = () => {
    return items.map((item) => (
      <div className="p-3  " key={item.id}>
        <div className="border h-[300px] p-2 rounded-[30px] ">
          <img
            src={`http://localhost:8800/uploads/${
              JSON.parse(item.image_urls)[0]
            }`}
            className="w-[200px] m-auto h-[200px]"
            alt={item}
          />
          <div>
            <h3 className=" font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
              {item.product_title}
            </h3>
          </div>
          <div>
            <h3 className="text-xl font-bold">₹{item.discount_price}</h3>
          </div>
          <div>
            {/* {getLatestCart().includes(item.id) ? (
              <button
                onClick={() => addToCart(item.product_id)}
                className="border rounded-full w-full font-bold"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(item.product_id)}
                className="border rounded-full w-full font-bold"
              >
                Add To Cart
              </button>
            )} */}

            <button
              onClick={() => addToCart(item.product_id)}
              className="border rounded-full w-full font-bold"
            >
              {cart.map((cartItem) => cartItem.id).includes(item.product_id)
                ? "Remove From Cart"
                : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="slick-arrow absolute top-1/2 right-4 bg-red-700 p-4  rounded-full  z-[1]  transform -translate-y-1/2 text-black"
    >
      <FaArrowRight className="text-white" />
    </button>
  );

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="slick-arrow  absolute top-1/2 left-4 transform bg-red-700 p-4 z-[1] rounded-full -translate-y-1/2 text-black"
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
