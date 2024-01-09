import React from "react";

import BrandNameHeader from "./BrandNameHeader/BrandNameHeader";
import PriceHeader from "./PriceHeader/PriceHeader";
import Deliverto from "./DeliverTo/Deliverto";
import ProductDesription from "./Description/ProductDesription";
import ProductInformation from "./Features&Details/ProductInformation";
import SignleCardMobCarousel from "./Carousel/Carousel";
import MobCarousel from "./Carousel/MobCarousel";
import ReviewRatings from "./Review&Ratings/ReviewRatings";
const SignleItem = () => {
  const images = [
    {
      alt: "product image",
      url: "https://alvarotrigo.com/blog/assets/imgs/2021-10-08/react-awesomeSlider-carousel.jpeg",
    },
    {
      alt: "product image",
      url: "https://alvarotrigo.com/blog/assets/imgs/2021-10-08/react-owl-carousel.jpeg",
    },
  ];
  return (
    <div className=" p-2 sm:p-12 ">
      <div className="flex shadow-inner rounded-[12px] shadow-zinc-500   ">
        <SignleCardMobCarousel
          className="p-3 w-[0%] sm:w-[40%]"
          images={images}
        />
        <div className="sm:w-[60%] w-[100%]  ">
          <BrandNameHeader
            brand="Priya"
            brandName="Priya Fortified With Vitamin A & D Refined Sunflower Oil 1 L"
            noOfRatings="352"
          />

          <MobCarousel className="sm:hidden block" images={images} />

          <PriceHeader
            soldBy="SMART BAZAR"
            delDate="2nd Jan to 4th Jan"
            price="98"
            realPrice="162"
            OfferPresent="39"
          />
          <Deliverto location={"40000023 Mumbai"} isAvlaible={true} />
          <ProductDesription
            description={
              "Kashmiri mamra almonds are full of oil and are very sweet in taste. try it once and you wont regret buying it from us."
            }
          />
          <ProductInformation
            ManufacturerAddress="Pyramid Traders
1st floor, cosco electronics, bagh ali mardan khan, srinagar 190023"
            Manufacturer={"Pyramed Traders"}
            brandName="Pyramed Traders"
            ManufacturerEmail="dj_faris203@yahoo.com
          "
          />
        </div>
      </div>


<ReviewRatings/>

    </div>
  );
};

export default SignleItem;
