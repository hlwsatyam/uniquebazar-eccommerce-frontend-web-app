import React from "react";
import AccountSettingList from "./AccountSettingList/AccountSettingList";
import Accountdata from "./AcountData/Accountdata";
import AutoAccountDetails from "./AutoAccountDetails/AutoAccountDetails";

const Customer = () => {
  const UserData = {
    first_name: "Satyam",
    last_name: "Kumar",
    email: "satyampandit021@gmail.com",
    phone: "+918059424475",
    gender: "0",
    dob: "11-02-2002",
  };
  return (
    <div className="my-3">
      <div className="flex">
        <AccountSettingList className="w-[30%]" UserData={UserData} />
        <Accountdata className="w-[70%]" UserData={UserData} />

        {/* <AutoAccountDetails UserData={UserData} /> */}
      </div>
    </div>
  );
};

export default Customer;
