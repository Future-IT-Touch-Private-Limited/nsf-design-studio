"use client"
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close if same index clicked
    } else {
      setActiveIndex(index); // open the clicked one
    }
  };

  const faq = [
    {
      srNo: "1",
      question: "What is the typical process for starting a design project?",
      answer:
        "Our process starts with a consultation to discuss your vision, followed by planning, design presentation, and implementation to achieve your ideal space.",
    },
    {
      srNo: "2",
      question: "How long does an interior design project usually take?",
      answer:
        "The timeline varies depending on the project size and scope, but most projects take between 4 to 12 weeks from concept to completion.",
    },
    {
      srNo: "3",
      question: "Can you work within a specific budget?",
      answer:
        "Absolutely! We tailor our designs to align with your budget while maintaining quality and style. Transparency is key throughout the process.",
    },
    {
      srNo: "4",
      question: "Do you offer both residential and commercial design services?",
      answer:
        "Yes, we specialize in both residential and commercial interior design, delivering customized solutions for homes, offices, retail spaces, and more.",
    },
    {
      srNo: "5",
      question: "Will I be involved in the design process?",
      answer:
        "Yes! We value collaboration and ensure your input is considered throughout the design process to reflect your style and preferences.",
    },
    {
      srNo: "6",
      question: "Do you handle purchasing and installation of furnishings?",
      answer:
        "Yes, we manage procurement, logistics, and installation, ensuring a seamless experience from concept to completion.",
    },
    {
      srNo: "7",
      question: "Can you work with my existing furniture and décor?",
      answer:
        "Definitely! We can incorporate your existing pieces into the new design or suggest enhancements for a cohesive look.",
    },
  
  ];
  

  return (
    <div className="px-5 md:px-12 xl:px-32  mb-4 lg:py-12 xl:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
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
          <p className="text-base lg:text-lg text-gray-600">
          Our dedicated team works closely with you to understand your vision and bring it to life with meticulous attention to detail and care.

          </p>

          <div className="mt-6 space-y-4">
            {faq.map((item, index) => (
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
                  <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section Image */}
        <div className="flex justify-center items-start">
          <img
            src="https://html.awaikenthemes.com/inspaire/images/faqs-image.jpg"
            alt="faq"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
