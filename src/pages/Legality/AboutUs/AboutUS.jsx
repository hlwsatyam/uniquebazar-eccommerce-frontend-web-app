import React, { useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import QuestionList from "./QuestionList/QuestionList";
import Footer from "../../footer/Footer";
const AboutUS = () => {
  return (
    <div className="p-4 ">
      <p className="text-xl font-bold ">About Us</p>
      <QuestionList />
  
    </div>
  );
};

export default AboutUS;
