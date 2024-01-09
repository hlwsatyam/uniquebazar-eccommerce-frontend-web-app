import React from "react";
import FaqQuestion from "./FaqQuestion/FaqData.json";
import { GoQuestion } from "react-icons/go";
const FAQ = () => {
  return (
    <div className="my-4 ml-3 p-2 w-[80%] sm:w-[66%] bg-slate-300 shadow ">
      <p className="text-3xl font-semibold flex gap-x-2 items-center">
        FAQ <GoQuestion />{" "}
      </p>
      <div>
        {FaqQuestion.map((item, index) => (
          <div>
            <p
              className="bg-gradient-to-r 
 from-green-900 to-blue-500 text-white p-2 my-2 font-light "
            >
              {" "}
              {item.Header}{" "}
            </p>
            {item.RelaventQuestion.map((item, index) => (
              <div className=" p-2 my-2 border-b-2 border-b-slate-600 ">
                <p className="my-1 font-semibold"> {item.Question} </p>
                <p className="text-[12px]"> {item.Answer} </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
