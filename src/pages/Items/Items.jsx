import React, { useEffect,useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Fiter from "./Fiter/Fiter";
import TopProductList from "../Home/TopProduct/TopProductList";
import axios from 'axios'
function Items() {
  const location = useLocation();
  const { category, searchableText } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/search/k?query=${searchableText}&page=1&pageSize=10&minPrice=&maxPrice=&sortBy=product_title&sortOrder=asc
          `
        );
        if (!response || !response.data || !Array.isArray(response.data)) {
          throw new Error("Invalid response format");
        }
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchItems();
  }, []);
  // const addToCart = (id) => {
  //   addToCartLocalHost(id);
  // };

  return (
    <div className="gap-x-3 my-4 flex">
      <Fiter />
      <div className=" w-[88%]">
        <TopProductList />
        <TopProductList />
      </div>
    </div>
  );
}

export default Items;
