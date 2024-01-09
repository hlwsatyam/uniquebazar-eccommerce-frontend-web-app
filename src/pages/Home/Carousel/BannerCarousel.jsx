import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerCarousel = () => {
  return (
    <div className="my-8">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        transitionTime={500}
      >
        <div>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1703699381_Unwrap_Unmatched_Discounts_D.jpg?im=Resize=(1680,320)"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1703160605_Bindaas_Biscuiting_1680x320.jpg?im=Resize=(1680,320)"
            alt="Slide 2"
          />
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
