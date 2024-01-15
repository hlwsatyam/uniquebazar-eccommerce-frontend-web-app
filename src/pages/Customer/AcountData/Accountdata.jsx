import React from "react";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import PanCardInformation from "./PANCardInformation/PanCardInformation";
import AddressDetails from "./AddressDetails/AddressDetails";
import MyOrder from "./MyOrder/MyOrder";
import FAQ from "../../Legality/FAQ/FAQ";

const Accountdata = ({ UserData, ...style }) => {
  return (
    <div {...style}>
      {/* <ProfileDetails UserData={UserData} /> */}
      {/* <PanCardInformation /> */}
      {/* <AddressDetails /> */}
      <MyOrder />
      {/* <FAQ viewFromAbout={false} /> */}
    </div>
  );
};

export default Accountdata;
