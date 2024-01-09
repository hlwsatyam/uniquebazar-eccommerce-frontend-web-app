import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

import logo from "../../../assets/AuthIMG/Unique Bazar.png";
function CardFeedBack({ images, ...style }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div {...style}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={5}
        itemsToScroll={5}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            maxWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {images.map((item) => (
          <div>
            <div className="text-white bg-gradient-to-r h-[60vh]  w-[300px]  shadow-2xl p-4 ">
              <img src={item.url} alt="" className="h-full my-2" />
              <p className="font-bold "> {item.message} </p>
              <p className="text-right my-5 ">
                {" "}
                <span className="bg-green-500 font-semibold rounded-full py-2 px-2">
                  {item.name}
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default CardFeedBack;
