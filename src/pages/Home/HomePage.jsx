import React from "react";
import BannerCarousel from "./Carousel/BannerCarousel";
import TopProductList from "./TopProduct/TopProductList";
import Offer from "./Coupon/Caupon";
import HeaderBelowList from "./HeaderBelowList/HeaderBelowList";
import AboutUniqueBazar from "./AboutUniqueBazar/AboutUniqueBazar";
import ClientFeedback from "./FeedBack/ClientFeedback";

const HomePage = () => {
  return (
    <div className="">
      <BannerCarousel />
      <p className="px-12 my-6 text-xl font-bold ">Shop From Top Categories</p>
      <TopProductList />
      <p className="px-12 my-6 text-xl font-bold ">Top Deals</p>
      <TopProductList />
      <Offer img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1703837725_home_page_1240x209.jpg?im=Resize=(1240,150)" />
      <Offer
        className="my-2"
        img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1701771542_Slim_Carousel_Reliance_Voucher__1240x209.jpg?im=Resize=(1240,150)"
      />
      <p className="px-12 my-6 text-xl font-bold ">Electronics Hub</p>
      <TopProductList />
      <Offer img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1701235639_Global_Store_Desktop.jpg?im=Resize=(1240,150)" />
      <p className="px-12 my-6 text-xl font-bold ">Top Picks</p>
      <TopProductList />
      <ClientFeedback />
      <AboutUniqueBazar />
    </div>
  );
};

export default HomePage;
