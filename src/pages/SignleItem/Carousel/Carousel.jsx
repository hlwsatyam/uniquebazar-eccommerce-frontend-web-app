import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function SignleCardMobCarousel({ images, ...style }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbnailHover = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div {...style}>
      <div className="flex">
        {/* Left Side: Small Thumbnails */}
        <div className="flex flex-col pr-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 mb-2 cursor-pointer"
              onMouseOver={() => handleThumbnailHover(index)}
            />
          ))}
        </div>

        {/* Right Side: Main Carousel */}
        <div className="flex-1   ">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={images.length}
            currentSlide={currentSlide}
          >
            <Slider>
              {images.map((image, index) => (
                <Slide index={index} key={index}>
                  <img
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    className=" object-center h-auto"
                  />
                </Slide>
              ))}
            </Slider>
            <DotGroup />
            <ButtonBack className="carousel-button hidden">Back</ButtonBack>
            <ButtonNext className="carousel-button hidden">Next</ButtonNext>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}

export default SignleCardMobCarousel;
