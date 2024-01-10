import React, { useState, useEffect } from "react";

const ProfileDetails = ({ UserData }) => {
  const [someThingChange, setSomeThingChange] = useState(false);
  const [latestUserData, setLatestUserData] = useState({
    firstName: UserData.first_name,
    email: UserData.email,
    phone: UserData.phone,
    lastName: UserData.last_name,
    gender: UserData.gender,
    dob: UserData.dob, // assuming UserData.dob is in the format "11-03-2002"
  });

  useEffect(() => {
    // Set the default value for date of birth when UserData changes
    setLatestUserData((prevData) => ({
      ...prevData,
      dob: UserData.dob, // Update the default date format
    }));
  }, [UserData]);

  const formatDisplayDate = (inputDate) => {
    const [year, month, day] = inputDate.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <div className="p-2 border rounded-[12px]">
        <p className="font-bold text-xl ">Edit Profile Details</p>
        <div className="my-3">
          <p className="text-sm">First Name</p>
          <input
            type="text"
            value={latestUserData.firstName}
            className="border-b-2 py-2 outline-none w-full  text-sm font-bold"
          />
        </div>
        <div className="my-3">
          <p className="text-sm">Last Name</p>
          <input
            type="text"
            value={latestUserData.lastName}
            className="border-b-2 py-2 outline-none w-full  text-sm font-bold"
          />
        </div>
        <div className="my-3">
          <p className="text-sm">Mobile Number</p>
          <input
            type="text"
            value={latestUserData.phone}
            className="border-b-2 py-2  w-full  outline-none text-sm font-bold"
          />
        </div>
        <div className="my-3">
          <p className="text-sm">Email</p>
          <input
            type="text"
            value={latestUserData.email}
            className="border-b-2 py-2 w-full  outline-none text-sm font-bold"
          />
        </div>
        <div className="my-3">
          <p className="text-sm">Gender</p>
          <p>
            <select
              className="w-full outline-none border-b-2 py-2 "
              name="gender"
              id="gender"
            >
              <option value="M" selected={latestUserData.gender === "M"}>
                Male
              </option>
              <option value="F" selected={latestUserData.gender === "F"}>
                Female
              </option>
              <option
                value="O"
                selected={!["M", "F"].includes(latestUserData.gender)}
              >
                Others
              </option>
            </select>
          </p>
        </div>
        <div className="my-3">
          <p className="text-sm">Date Of Birth*</p>
          <input
            type="date"
            name="dob"
            className="w-full my-2 outline-none"
            id="dob"
            value={latestUserData.dob}
            onChange={(e) =>
              setLatestUserData({
                ...latestUserData,
                dob: e.target.value,
              })
            }
          />
          <p>Your DATE OF BIRTH: {formatDisplayDate(latestUserData.dob)}</p>
        </div>
        {someThingChange ? (
          <button className="bg-green-600 font-bold w-full py-3  rounded-full text-white">
            {" "}
            Save Change{" "}
          </button>
        ) : (
          <button className="bg-green-200 cursor-auto  font-bold w-full py-3  rounded-full text-white">
            {" "}
            Save Change{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
