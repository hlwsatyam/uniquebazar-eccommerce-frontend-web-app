import React from "react";
import globalDelivery from "../../../../assets/Background/Global delivery.gif";
import { Toaster } from "react-hot-toast";
import { AddAddress } from "../../../../components/SupportiveFunction/AddingNewAddress";
const AddressDetails = () => {
  return (
    <div className="p-2 ">
      <p className="text-xl">Saved Addresses</p>
      <BlankAddress />
      <Toaster />
      <button
        onClick={AddAddress}
        className="bg-green-500 text-white py-3 rounded-full w-full my-5 text-xl font-bold"
      >
        + Add New Address{" "}
      </button>
    </div>
  );
};

export default AddressDetails;

const BlankAddress = () => (
  <div>
    <img
      className="w-[200px] m-auto h-auto"
      src={globalDelivery}
      alt=""
      srcset=""
    />
    <p className="text-center text-xl font-bold my-3">
      You don't have any address saved!
    </p>
    <p className="text-center font-semibold text-sm">
      Please provide your address details to find the best products and offers
      in your area.
    </p>
  </div>
);
