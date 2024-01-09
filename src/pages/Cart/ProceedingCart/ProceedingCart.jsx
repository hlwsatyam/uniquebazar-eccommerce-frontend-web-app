import React from "react";
import ProceedingBanner from "./ProcedingBanner/ProceedingBanner";
import PaymentCalculation from "./PaymentCalculation/PaymentCalculation";

const ProceedingCart = ({ ...style }) => {
  return (
    <div {...style}>
      <ProceedingBanner />
      <PaymentCalculation />
    </div>
  );
};

export default ProceedingCart;
