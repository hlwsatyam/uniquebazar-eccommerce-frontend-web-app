import React from "react";
import SignleCart from "../SingleCart/SignleCart";
const CartItems = ({ ...style }) => {
  return (
    <div {...style}>
      {" "}
      <h1 className=" font-extrabold text-2xl px-2 ">My Cart</h1>
      <SignleCart />{" "}
    </div>
  );
};

export default CartItems;
