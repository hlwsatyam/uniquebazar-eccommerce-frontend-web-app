import React from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const SignleCart = ( {...style} ) => {
  return (
    <div className="p-6 ">
      <h1 className="flex justify-between my-3 ">
        {" "}
        <span className="font-bold ">Beauty Basket</span>
        <span className="font-bold ">₹362.00</span>
      </h1>
      <div className="flex items-center gap-x-6 ">
        <img className=" w-[100px] h-[100px] "
          src="https://www.jiomart.com/images/product/original/rveubpthdn/livewell-fleece-blanket-mild-winter-printed-single-bed-quilt-comforter-blanket-brown-product-images-orveubpthdn-p606158694-0-202311181131.jpg?im=Resize=(240,240)"
          alt=""
        />
        <div>
          <p className="text-[14px] my-2">
            LiveWell Fleece Blanket Mild Winter Printed Single Bed Quilt
            Comforter Blanket - (Brown)
          </p>
          <p className="text-[14px] my-2">₹198.00</p>
          <p className="text-[14px] my-2 text-green-900 font-bold inline px-3 py-1 text-left bg-green-300 rounded-[100px]">
            You Save ₹1,000.00
          </p>
        </div>
      </div>
      <p className="flex justify-end items-center">
        {" "}
        <CiCircleMinus className="inline cursor-pointer text-3xl " />
        <span className="mx-4 text-2xl ">2</span>{" "}
        <CiCirclePlus className="inline cursor-pointer text-3xl " />
      </p>
    </div>
  );
};

export default SignleCart;
