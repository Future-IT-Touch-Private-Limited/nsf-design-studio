"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { serviceData as service } from "../servicedata";
export default function ServiceInner({ singleService }) {
  const leftFeatures = [
    {
      image: "/images/serviceLeft/1.svg",
      title: "tailored design solutions",
      desc: "We provide personalized interior design services that reflect your unique vision and lifestyle.",
    },
    {
      image: "/images/serviceLeft/2.svg",
      title: "Seamless Project Management",
      desc: "We handle the entire design process, from concept to completion, with flawless execution.",
    },
    {
      image: "/images/serviceLeft/3.svg",
      title: "Client-Centered Collaboration",
      desc: "Your input is valued throughout the entire process, ensuring your vision is fully realized.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close if same index clicked
    } else {
      setActiveIndex(index); // open the clicked one
    }
  };

  const renderBox = ({ image, title, desc }) => (
    <article className="pbmit-miconheading-style-8 group">
      <div className="pbmit-ihbox-style-8">
        <div className="pbmit-ihbox-box flex flex-col lg:flex-row items-center text-center lg:text-start lg:items-start gap-4">
          <div className="bg-[#eaf0ec] group-hover:bg-black transition duration-300 flex  justify-center items-center h-16 w-16 rounded-full shrink-0">
            <img src={image} alt={title} className="h-8 w-8 object-contain" />
          </div>
          <div className="pbmit-ihbox-contents">
            <h2 className="pbmit-element-title capitalize font-semibold text-base sm:text-lg mb-1">
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
    <div>
      <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('https://html.awaikenthemes.com/inspaire/images/page-header-bg.jpg')] h-[30vh] md:h-[40vh] xl:h-[55vh] flex flex-col justify-center items-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-3xl md:text-5xl lg:text-6xl capitalize font-bold">
              {singleService.title}
            </h1>
            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium">
                service / {singleService.title}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
        <div className="container mx-auto flex flex-col-reverse lg:grid  lg:grid-cols-3 gap-x-16 gap-y-8">
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-0">
              <div className="border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
                <h5 className="text-xl lg:text-2xl capitalize font-semibold text-gray-800">
                  Services Category
                </h5>
                <hr className="border-gray-200" />
                <div className="space-y-3">
                  {service.map((elm, index) => (
                    <Link
                      href={`/service/${elm.title
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      key={index}
                      className="flex items-center justify-between text-gray-500 hover:text-black group transition-colors duration-300"
                    >
                      <span className="text-sm lg:text-base transition-colors duration-300">
                        {elm.title}
                      </span>
                      <FaArrowRightLong className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-in-out" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/service/help.webp"
                  alt="help"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-white p-4 lg:p-6 space-y-4">
                  <h5 className="text-lg lg:text-xl capitalize font-semibold text-gray-800">
                    How can we help
                  </h5>
                  <p className="text-sm text-gray-600">
                    If you need any help, please feel free to contact us.
                  </p>

                  <div className="space-y-3">
                    {/* Phone */}
                    <div className="flex items-center gap-4 group">
                      <div className="bg-[#eaf0ec] group-hover:bg-black transition-all duration-300 flex justify-center items-center h-14 w-14 rounded-full shrink-0">
                        <img
                          src="/images/service/icon-phone.svg"
                          alt="call"
                          className="h-6 w-6 object-contain group-hover:invert transition duration-300"
                        />
                      </div>
                      <a
                        href="tel:+91 82968 19909"
                        className="text-sm text-gray-700 group-hover:text-black transition duration-300"
                      >
                        +91 82968 19909
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4 group">
                      <div className="bg-[#eaf0ec] group-hover:bg-black transition-all duration-300 flex justify-center items-center h-14 w-14 rounded-full shrink-0">
                        <img
                          src="/images/service/icon-mail.svg"
                          alt="mail"
                          className="h-6 w-6 object-contain group-hover:invert transition duration-300"
                        />
                      </div>
                      <p className="text-sm text-gray-700 group-hover:text-black transition duration-300">
                        info@domain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6 lg:space-y-12">
            <img src={singleService.image} alt={singleService.title} />
            <div className="space-y-4 lg:space-y-6 text-justify">
              {singleService.description.map((elm, index) => (
                <p key={index}>{elm}</p>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
              <img src={singleService.image} alt={singleService.title} />
              <div className="space-y-4 lg:space-y-4">
                {singleService.highlights.map((elm, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#A0A8A2]" />
                    <p>{elm}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-choose space-y-4">
              <div className="section-title space-y-2 lg:space-y-4">
                <button className="group text-[#7c877f] text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded  transition-all duration-300">
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                    <img
                      src="/images/about/arrow.svg"
                      alt="Arrow"
                      className=""
                    />
                  </span>
                  Our service
                </button>

                <h5 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  A behind the scenes look at
                  <span className="text-[#7c877f]">our agency</span>
                </h5>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
                  We offer a range of bespoke interior design services tailored
                  to your unique needs — from concept development to final
                  installation.
                </p>
              </div>
              <div className="w-full  space-y-6">
                {leftFeatures.map((item, i) => (
                  <div key={i}>{renderBox(item)}</div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button className="group text-[#7c877f] capitalize text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded   transition-all duration-300">
                <span className="inline-block  transform transition-transform duration-300 group-hover:translate-x-1">
                  <img src="/images/about/arrow.svg" alt="Arrow" className="" />
                </span>
                asked question
              </button>

              <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                Have any questions? Look here now
              </h5>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
                Our dedicated team works closely with you to understand your
                vision and bring it to life with meticulous attention to detail
                and care.
              </p>

              {/* FAQ List */}
              <div className="mt-6 space-y-4">
                {singleService.faq.map((item, index) => (
                  <div key={item.srNo} className="border-b pb-4">
                    <button
                      onClick={() => handleToggle(index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <h6 className="text-lg font-semibold text-gray-800">
                        {item.question}
                      </h6>
                      {activeIndex === index ? (
                        <FiChevronUp className="text-xl" />
                      ) : (
                        <FiChevronDown className="text-xl" />
                      )}
                    </button>
                    {activeIndex === index && (
                      <p className="text-sm text-gray-600 mt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
