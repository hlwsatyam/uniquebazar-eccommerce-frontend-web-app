import React from "react";

const PaymentCalculation = () => {
  return (
    <div className="border rounded-[12px] p-2">
      <p className="font-bold text-[14px]">Payment Details</p>
      <div>
        <p className="border-b-2 my-2 ">
          {" "}
          MRP Totel <span className="float-right">₹{}</span>{" "}
        </p>
        <p className="border-b-2 my-2 ">
          {" "}
          Product Discount <span className="float-right">₹{}</span>{" "}
        </p>
        <p className="border-b-2 my-2 ">
          {" "}
          Delevery Fees <span className="float-right">₹{}</span>{" "}
        </p>
        <p className="b-2 my-2 ">
          {" "}
          Total <span className="float-right">₹{}</span>{" "}
        </p>
        <p className="b-2 my-2 text-green-600 font-bold text-right ">
          You saved ₹{}
        </p>
      </div>
      <button className="py-2 px-3 rounded-full bg-green-600 text-white w-full font-bold ">
        {" "}
        Place Order{" "}
      </button>
    </div>
  );
};

export default PaymentCalculation;
