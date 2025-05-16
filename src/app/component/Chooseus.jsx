"use client";

import { Link } from "lucide-react";
import React from "react";
const Chooseus = () => {
  const leftFeatures = [
    {
      image: "/images/choose/1.svg",
      title: "5 Years Warranty",
      desc: "We offer competitive and affordable rates for our interior design.",
    },
    {
      image: "/images/choose/2.svg",
      title: "Latest Technologies",
      desc: "We offer competitive and affordable rates for our interior design.",
    },
    {
      image: "/images/choose/3.svg",
      title: "High-Quality Designs",
      desc: "We offer competitive and affordable rates for our interior design.",
    },
  ];

  const rightFeatures = [
    {
      image: "/images/choose/4.svg",
      title: "Transparent Pricing",
      desc: "We offer competitive and affordable rates for our interior design.",
    },
    {
      image: "/images/choose/5.svg",
      title: "Professional Team",
      desc: "We offer competitive and affordable rates for our interior design.",
    },
    {
      image: "/images/choose/6.svg",
     title: "Quality Guaranteed",
desc: "We use premium materials and trusted craftsmanship that stand the test of time."

    },
  ];

  const renderBox = ({ image, title, desc }) => (
    <article className="pbmit-miconheading-style-8 group">
      <div className="pbmit-ihbox-style-8">
        <div className="pbmit-ihbox-box flex flex-col lg:flex-row items-center text-center md:text-start lg:items-start gap-4">
          {/* <div className="pbmit-ihbox-icon shrink-0">
            <img src={image} alt={title} className="w-12 h-12 object-cover" />
          </div> */}
          <div className="bg-[#eaf0ec] group-hover:bg-black transition duration-300 flex  justify-center items-center h-16 w-16 rounded-full shrink-0">
              <img
                src={image}
                alt={title}
                className="h-8 w-8 object-contain"
              />
            </div>
          <div className="pbmit-ihbox-contents">
            <h2 className="pbmit-element-title font-semibold text-base sm:text-lg mb-1">
              {title}
            </h2>
            <div className="pbmit-heading-desc text-gray-600 text-sm">
              {desc}
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section className="px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16 xl:pt-0">
      <div className="">
        {/* Top Row */}
        <div className="flex flex-col xl:flex-row gap-8 mb-12 items-center justify-between lg:px-28">
          <div className="w-full  text-center">
            <div className="pbmit-heading-subheading animation-style2">
              <h4 className="text-xs uppercase text-gray-500 tracking-wide">
                Since 1986
              </h4>
              <h5 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
         Why Choose  {" "}
            <span className="text-[#7c877f]">us</span>
          </h5>

              <p className='pt-7 text-base'>  We blend creativity, functionality, and your unique style to craft interiors that inspire. From space planning to final touches, our expert team ensures every detail reflects your vision and enhances your lifestyle. Experience interior design that truly feels like home.
</p>
            </div>
          </div>
    

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Features */}
          <div className="w-full md:w-4/12 space-y-6">
            {leftFeatures.map((item, i) => (
              <div key={i}>{renderBox(item)}</div>
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full md:w-4/12 flex justify-center">
            <img
              src="/images/choose.webp"
              alt="Why Choose Us"
              className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto object-cover rounded-lg ihbox-imgbox"
            />
          </div>

          {/* Right Features */}
          <div className="w-full md:w-4/12 space-y-6">
            {rightFeatures.map((item, i) => (
              <div key={i}>{renderBox(item)}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <style jsx>{`
        .ihbox-imgbox:hover {
          transform: perspective(100px) rotateY(-3deg);
          border-radius: 15px;
          transition: 0.9s;
        }
      `}</style>
    </section>
  );
};

export default Chooseus;
