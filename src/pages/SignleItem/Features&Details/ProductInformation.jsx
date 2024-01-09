import React from "react";

const ProductInformation = ({
  brandName,
  Manufacturer,
  ManufacturerAddress,
  ManufacturerEmail,
}) => {
  return (
    <div className="my-3 border-b-2 p-3">
      <p className="text-xl font-bold my-1 ">Product Information</p>
      <p className="text-[12px]  my-1 ">GENRAL INFORMATION</p>
      <p className="flex my-2 ">
        {" "}
        <span className="w-[50%]"> Brand </span>{" "}
        <span className="w-[50%]"> {brandName} </span>{" "}
      </p>
      <p className="flex my-2 ">
        {" "}
        <span className="w-[50%]"> Manufacturer </span>{" "}
        <span className="w-[50%]"> {Manufacturer} </span>{" "}
      </p>
      <p className="flex my-2 ">
        {" "}
        <span className="w-[50%]"> Manufacturer Address</span>{" "}
        <span className="w-[50%]"> {ManufacturerAddress} </span>{" "}
      </p>
      <p className="flex my-2 ">
        {" "}
        <span className="w-[50%]"> Manufacturer Email </span>{" "}
        <span className="w-[50%]"> {ManufacturerEmail} </span>{" "}
      </p>
    </div>
  );
};

export default ProductInformation;
