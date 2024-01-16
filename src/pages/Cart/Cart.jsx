import React from "react";
import EmptyCart from "./Empty/EmptyCart";
import CartItems from "./CartItems/CartItems";
import ProceedingCart from "./ProceedingCart/ProceedingCart";

const Cart = () => {
  return (
    <div>
      {" "}

 <EmptyCart /> 
      {/* <div className="  sm:p-6 rev-responsive ">
        <CartItems className="rev-rate-data w-[60%]" />
        <ProceedingCart className="comment-list  w-[40%] p-2" />
      </div> */}
    </div>
  );
};

export default Cart;
