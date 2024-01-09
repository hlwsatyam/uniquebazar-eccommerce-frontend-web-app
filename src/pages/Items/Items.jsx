import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Fiter from "./Fiter/Fiter";
import TopProductList from "../Home/TopProduct/TopProductList";

function Items() {
  const location = useLocation();
  const { category } = useParams();

  return (
    <div className="gap-x-3 my-4 flex">
      <Fiter />
     <div className=" w-[88%]" >
     <TopProductList/>
     <TopProductList/>
     
     </div>
    </div>
  );
}

export default Items;
