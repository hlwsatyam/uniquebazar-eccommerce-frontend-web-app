// Header.js
import logo from "../../assets/AuthIMG/Unique Bazar.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import HeaderBelowList from "../Home/HeaderBelowList/HeaderBelowList";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r px-3 sticky  w-full top-0   z-[999999999999999999999999999999]  from-green-900 to-blue-500 text-white py-4">
      <div className="container  mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            {" "}
            <img
              src={logo}
              alt="Logo"
              className="w-[70px] rounded-full cursor-pointer h-[70px] mr-2"
            />
          </Link>{" "}
        </div>

        <div className="flex   items-center mt-4 lg:mt-0">
          <div className="relative mr-4 ">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-3 w-[37vw] sm:w-[60vw] rounded-full bg-white text-gray-800 focus:outline-none focus:shadow-outline"
            />
            <span className="absolute right-3 top-3">
              <FaSearch color="black" />
            </span>
          </div>
          <Link to="/checkout/cart">
            <button className="flex items-center  text-white hover:text-gray-300">
              <FaShoppingCart className="mr-1" />
              <span className="hidden sm:block"> Add to Cart</span>
            </button>
          </Link>
          <Link to="/account/login">
            <a
              href="#"
              className="hover:text-gray-300 ml-4 flex items-center gap-x-1"
            >
              <FaUser className="mr-1" />
              <span className="hidden sm:block"> Login</span>
            </a>
          </Link>

          {/* Responsive Navigation Toggle Button */}
          <button
            className="lg:hidden ml-5 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Responsive Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden w-full mt-4">
            <a
              href="#"
              className="block text-white py-2 border-b border-gray-400 hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-white py-2 border-b border-gray-400 hover:text-gray-300"
            >
              Shop
            </a>
            <a
              href="#"
              className="block text-white py-2 border-b border-gray-400 hover:text-gray-300"
            >
              Categories
            </a>
            <a href="#" className="block text-white py-2 hover:text-gray-300">
              Contact
            </a>
          </div>
        )}
      </div>
      <HeaderBelowList />
    </header>
  );
};

export default Header;
