import React from "react";

import OrderTruck from "../../../../../assets/Background/Truck delivery service.gif";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <BlankOrder />
    </div>
  );
};

export default Order;

const BlankOrder = () => {
  return (
    <div>
      <img className="m-auto w-[400px] " src={OrderTruck} alt="" />
      <p className="text-center font-bold">
        We’re waiting for your first order
      </p>
      <p className="text-center font-bold">
        No orders placed yet. Shop from our categories and grab the best deals
        on your order.
      </p>
      <div className="text-center my-4">
        <button className="bg-green-500 text-white py-2 px-12  rounded-full font-bold text-sm">
          <Link to="/"> Explore Category</Link>
        </button>
      </div>
    </div>
  );
};
