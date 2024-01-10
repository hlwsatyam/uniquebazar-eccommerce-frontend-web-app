import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export const AddAddress = () => {
  toast(
    (t) => (
      <div className="toast-content">
        <p className="text-right">
          {" "}
          <button onClick={() => toast.dismiss(t.id)}>❌</button>
        </p>
        <NewAddres />
      </div>
    ),
    {
      position: "top-right",
      duration: 10000000,
      style: {
        maxHeight: "90vh",
        overflowY: "scroll",
        marginTop: "200px",
      },
    }
  );
};

const NewAddres = () => {
  const [addressData, setAddressData] = useState({
    pinCode: "",
    HouseNo: "",
    floorNo: "",
    towerNo: "",
    apartmentName: "",
    address: "",
    city: "",
    state: "",
  });
  return (
    <div className=" ">
      <p className="text-2xl font-bold my-2">Add Addresss</p>
      <p className="text-xl font-semibold my-3 ">Address Details</p>

      <div className="my-3">
        <p className="text-sm">Pin Code*</p>
        <input
          type="text"
          name="pinCode"
          value={addressData.pinCode}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">House No.</p>
        <input
          type="text"
          name="houseNo"
          value={addressData.HouseNo}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">Floor No.</p>
        <input
          type="text"
          name="floorCode"
          value={addressData.floorNo}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">Tower No.</p>
        <input
          type="text"
          name="floorCode"
          value={addressData.towerNo}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">Building / Apartment Name.</p>
        <input
          type="text"
          name="floorCode"
          value={addressData.apartmentName}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">Address*</p>
        <input
          type="text"
          name="floorCode"
          value={addressData.address}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">City *</p>
        <input
          type="text"
          name="floorCode"
          value={addressData.city}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">State *</p>
        <input
          type="text"
          name="floorCode"
          value={addressData.state}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
    </div>
  );
};
