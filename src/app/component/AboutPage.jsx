import React from "react";
import Link from "next/link";
import { FaGreaterThan, FaLongArrowAltRight } from "react-icons/fa";
import About from "./About";
import Faq from "./Faq";
import CommonBanner from "./CommonBanner";

export default function AboutPage() {
  const priceDesign = [
    {
      title: "reasonable prices",
      desc: "We produce furniture to fulfill needs of all people and offer it at affordable prices.",
      img: "/images/about/icon1.svg",
    },
    {
      title: "exclusive design",
      desc: "We produce furniture to fulfill needs of all people and offer it at affordable prices.",
      img: "/images/about/icon2.svg",
    },
    {
      title: "professional team",
      desc: "We produce furniture to fulfill needs of all people and offer it at affordable prices.",
      img: "/images/choose/2.svg",
    },
  ];
  return (
    <div>

        <CommonBanner name="about Us" />

      <About />

      <div className="px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 py-8 md:py-12 xl:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {priceDesign.map((elm, index) => (
          <div key={index} className="flex group items-start gap-x-4">
            <div className="bg-[#eaf0ec] group-hover:bg-black transition duration-300 flex justify-center items-center h-16 w-16 rounded-full shrink-0">
              <img
                src={elm.img}
                alt={elm.title}
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <h5 className="font-bold capitalize text-lg xl:text-2xl mb-1">
                {elm.title}
              </h5>
              <p className="text-sm text-gray-600">{elm.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#192324] text-white px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 lg:h-[50vh] py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
          

                <button className="group text-[#7c877f] text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded   transition-all duration-300">
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
              <img src="/images/about/arrow.svg" alt="Arrow" className="" />
            </span>
            Vision & Mission
          </button>

            <h5 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2">
              A behind the scenes look at <br /> our agency
            </h5>
          </div>

          <div className="flex-1 text-sm md:text-base text-gray-300">
            <p>
              Our portfolio showcases a diverse range of projects, from
              beautifully crafted residential spaces to functional and stylish
              commercial interiors.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 py-12 lg:-mt-40 ">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 bg-[#F8F8F8] p-5 md:p-12">
          <div className="space-y-4 group">
            <div className="h-16 w-16 rounded-full flex bg-[#eaf0ec] group-hover:bg-black transition duration-300  items-center justify-center">
            <img
              src="/images/vision.svg"
              alt="Vision Icon"
              className="w-8 h-8"
            />
            </div>
            <h5 className="text-xl font-semibold capitalize">Our Vision</h5>
            <p className=" text-gray-600 text-base">
              Our vision is rooted in the belief that thoughtfully designed
              spaces can transform lives, enhancing how people feel, work, and
              connect. We are committed to creating interiors that reflect our
              clients' unique identities, blending comfort, functionality, and
              beauty. By combining timeless design with modern innovations, we
              craft spaces that are visually stunning and practical.
            </p>
          </div>

          <div className="space-y-4 group lg:border-l border-gray-200 p-4">
          <div className="h-16 w-16 rounded-full flex bg-[#eaf0ec] group-hover:bg-black transition duration-300   items-center justify-center">
            <img
              src="/images/mission.svg"
              alt="Vision Icon"
              className="w-8 h-8"
            />
            </div>
            <h5 className="text-xl font-semibold capitalize">Our Mission</h5>
            <p className=" text-gray-600 text-base">
              Our mission is to bring ideas to life through innovative design
              solutions that exceed expectations. We aim to build meaningful
              environments that resonate emotionally while offering practical
              value, always prioritizing client satisfaction and environmental
              sustainability.
            </p>
          </div>
        </div>
      </div>

      <Faq/>
    </div>
  );
}
