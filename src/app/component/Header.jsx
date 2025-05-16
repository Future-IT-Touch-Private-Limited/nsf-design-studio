"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Header() {
  const sliders = [
    {
      img: "/images/heroSection/1.webp",
      heading: "Crafting dream interiors, one ",
      highlight: "space at a time",
      description:
        "Our designers collaborate closely to bring your ideas to life—whether revamping a room or your entire home. We design with your lifestyle in mind.",
    },
    {
      img: "/images/heroSection/2.webp",
      heading: "Transforming your space into a ",
      highlight: "masterpiece",
      description:
        "From concept to completion, we deliver seamless interior solutions that reflect your style and elevate your everyday living experience.",
    },
    {
      img: "/images/heroSection/3.webp",
      heading: "Designing spaces that ",
      highlight: "inspire and uplift",
      description:
        "We create more than just interiors—we craft environments that support wellness, boost creativity, and align with your personal vision.",
    },
  ];
  

  const Slide = ({ elm }) => (
    <div
      style={{ backgroundImage: `url(${elm.img})` }}
      className="h-full w-full relative bg-center bg-cover bg-fixed flex items-center"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="text-center md:text-start space-y-4 px-5 md:px-12 xl:px-32 relative z-10">
        <button className="group text-white text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded transition-all duration-300">
          <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
            <img src="/images/about/arrow.svg" alt="Arrow" />
          </span>
          {elm.highlight}
        </button>

        <h5 className="text-2xl md:text-3xl lg:text-4xl xl:text-7xl text-white font-bold">
          {elm.heading}
          <br />
          <span className="text-white">{elm.highlight}</span>
        </h5>

        <p className="text-base leading-relaxed text-white lg:text-lg lg:w-[60%]">
          {elm.description}
        </p>

        <div className="flex flex-col items-center md:flex-row gap-4">
          <button className="relative w-fit group flex gap-x-4 items-center px-8 py-4 bg-[#7c877f] text-white text-sm font-semibold hover:text-[#7c877f] hover:bg-white transition duration-300">
            <span>Explore More</span>
            <span className="transition-transform transform group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </button>

          <button className="hidden md:flex relative w-fit group gap-x-4 items-center px-6 py-4 bg-white text-[#7c877f] text-sm font-semibold hover:text-white hover:bg-[#7c877f] transition duration-300">
            <span>View Projects</span>
            <span className="transition-transform transform group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-[65vh] md:h-[70vh] lg:h-screen overflow-hidden">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-full"
      >
        {sliders.map((elm, index) => (
          <SwiperSlide key={index}>
            <Slide elm={elm} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
