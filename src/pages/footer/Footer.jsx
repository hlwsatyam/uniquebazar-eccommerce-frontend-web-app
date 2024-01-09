import React from "react";
import SubscribeLetter from "./subscribeletter/SubscribeLetter";
import SocialPayment from "./social/SocialPayment";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerHeadList = [
    {
      label: "about us",
      childList: [
        { label: "about us", url: "/about-us" },
        { label: "contact us", url: "contact" },
        { label: "  FAQ", url: "faq" },
      ],
    },
    {
      label: "news & media",
      childList: [
        { label: "about us", url: "abouts" },
        { label: "Our Vision & purpose", url: "visions" },
        { label: "  purpose", url: "visions" },
      ],
    },
    {
      label: "our policies",
      childList: [
        { label: "Privacy Policy", url: "privacy-policy" },
        { label: "  Terms & Conditions", url: "terms-conditions" },
        {
          label: "  Shipping & Delevery Policy",
          url: "shipping&delivery-policy",
        },
        { label: "  Recycling Policy", url: "recycling-policy" },
        { label: "  Delevery Policy", url: "shipping&delivery-policy" },
      ],
    },
    {
      label: "sign up to sty updated",
      childList: [
        { label: "help center", url: "helpcentre" },
        { label: "Our Vision & purpose", url: "visions" },
        { label: "  purpose", url: "visions" },
      ],
    },
  ];
  return (
    <div className="">
      <div className="flex gap-x-10 gap-y-16 pt-16 pb-10 justify-around flex-wrap bg-slate-500 text-white  ">
        {footerHeadList.map((item) => (
          <div>
            {" "}
            <p className="uppercase mb-6 font-semibold ">{item.label}</p>{" "}
            {item.childList?.map((childItem) => (
              <p className="my-1">
                <a className="capitalize text-[12px] " href={childItem.url}>
                  {childItem.label}
                </a>
              </p>
            ))}
          </div>
        ))}
        <SubscribeLetter />
      </div>
      <SocialPayment />
    </div>
  );
};

export default Footer;
