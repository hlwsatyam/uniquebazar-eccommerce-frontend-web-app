import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaBorderAll } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { MdOutlineLiveHelp } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { SignOut } from "../../../components/SupportiveFunction/SignOut";
const AccountSettingList = ({ UserData }) => {
  return (
    <div>
      <div className="border p-3 rounded-[18px]">
        <p
          className="flex items-center justify-between gap-x-3 border-b-2
        my-2 py-2"
        >
          <span className="rounded-full bg-green-200 text-green-500 p-3">
            <FaUser className=" text-2xl" />{" "}
          </span>

          <p>
            <p className="text-[16px] font-semibold">{UserData.name}</p>{" "}
            <p className="text-[14px]  font-semibold">{UserData.email}</p>{" "}
            <p className="text-[14px]  font-semibold">{UserData.phone}</p>{" "}
          </p>
          <IoIosArrowDroprightCircle className="bg-green-200 text-4xl cursor-pointer rounded-full text-green-500 " />
        </p>
        <p
          className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
        >
          <FaBorderAll className="text-4xl  text-green-500 " />
          <span className="font-semibold ">My Orders</span>
        </p>
        <p
          className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
        >
          <FaRegAddressCard className=" text-4xl  text-green-500 " />
          <span className="font-semibold ">PAN Card Information</span>
        </p>
        <p
          className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
        >
          <MdOutlineAddLocationAlt className=" text-4xl rounded-full text-green-500 " />
          <span className="font-semibold ">Delivery Addressess</span>
        </p>
        <p
          className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
        >
          <MdOutlineLiveHelp className=" text-4xl rounded-full text-green-500 " />
          <span className="font-semibold ">Need Help</span>
        </p>
        <p
          onClick={SignOut}
          className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
        >
          <GrLogout className=" text-4xl  text-green-500 " />
          <span className="font-semibold ">Sign Out</span>
        </p>
      </div>
    </div>
  );
};

export default AccountSettingList;
