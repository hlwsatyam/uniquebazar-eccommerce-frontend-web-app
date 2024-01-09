import React, { useState, useEffect } from "react";
import loginImg from "../../../assets/AuthIMG/login_girl.jpg";
const Login = () => {
  const [input, setInput] = useState({
    mobileNumber: "",
    otp: "",
  });
  useEffect(() => {
    setIsOtpComing(input.mobileNumber.length >= 10);
  }, [input.mobileNumber]);
  const InputChangeHandler = (e) => {
    setInput((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  const [isOtpComing, setIsOtpComing] = useState(
    input.mobileNumber.length < 10 ? false : true
  );

  return (
    <div className="grid col-span-1 place-items-center my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Image (hidden on mobile) */}
        <img
          src={loginImg}
          className="w-[450px] h-[450px] md:block lg:block hidden"
          alt="Login Img"
        />

        {/* Text (always visible) */}
        <div className="md:col-span-1 rounded-[20px] shadow p-10 bg-slate-50 lg:col-span-1 flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-3xl w-full  ">
            Login To UniqueBazar
          </h1>
          <p className="  mt-2 text-[12px] w-full ">
            to access your Addresses, Orders & Accounts.
          </p>
          <div className="mt-8 w-full relative border border-b-orange-400">
            <input
              name="mobileNumber"
              type="text"
              onChange={InputChangeHandler}
              className="border-none px-4 py-3 font-bold text-[14px]   placeholder:text-center placeholder:font-bold placeholder:text-[13px] w-full outline-none"
              placeholder="Enter your mobile number"
            />
          </div>

          <button
            className={
              isOtpComing
                ? `bg-slate-800 text-white font-semibold w-full rounded-full py-3 mt-4`
                : `bg-slate-300 cursor-default text-white font-semibold w-full rounded-full py-3 mt-4`
            }
          >
            Get OTP
          </button>
          <p className="  mt-2 text-[12px] w-full ">
            By continuing, you agree to our{" "}
            <span className="cursor-pointer font-semibold text-blue-400">
              Terms of Service
            </span>{" "}
            and
            <span className="cursor-pointer font-semibold text-blue-400">
              {" "}
              Privacy & Legal Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
