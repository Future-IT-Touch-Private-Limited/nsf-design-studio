// import React from 'react';

// const About = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:px-28 sm:px-6 p-5 md sm:py-14 ">

//       <div className="relative w-full lg:w-1/2 group overflow-hidden shadow-2xl">
//         <img
//           src="https://xinterio-demo.pbminfotech.com/html-demo/images/homepage-1/about-mask-img.jpg"
//           alt="Team planning"
//           className="w-full h-full  object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
//         />
//       </div>

//       <div className="relative w-full lg:w-1/2 mt-8 md:mt-0">
//         <p className="text-xs sm:text-sm text-[#5f6d63] tracking-widest uppercase mb-1 sm:mb-2">— About Us</p>

//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-4 sm:mb-5">
//           Our passion for design, <br />
//           your <span className="text-[#5f6d63]">vision realized</span>
//         </h2>

//         <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5 text-justify">
//           Our dedicated team of designers works closely with you to understand your vision and bring it to life with thoughtful attention to detail. Whether it's transforming a single room or an entire home.
//         </p>
//         <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5 text-justify">
//           Our dedicated team of designers works closely with you to understand your vision and bring it to life with thoughtful attention to detail. Whether it's transforming a single room or an entire home.
//         </p>

//         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
//           {[
//             "creative expertise",
//             "client-centered approach",
//             "transforming spaces",
//             "attention to detail",
//           ].map((item, index) => (
//             <li key={index} className="flex items-center gap-2">
//               <span className="text-black text-xl">✔</span>
//               <span className="text-gray-800 capitalize text-sm sm:text-base">{item}</span>
//             </li>
//           ))}
//         </ul>

//         <div className="flex  sm:flex-row items-start sm:items-center gap-5">
//           <button className="bg-[#5f6d63] text-white px-5 py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-[#4b584e] transition-all duration-300">
//             Read More →
//           </button>

//           <div className="flex items-center gap-3">
//             <div className="bg-[#5f6d63] p-2.5 rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5 sm:w-6 sm:h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75C2.25 19.5 19.5 21.75 19.5 21.75s2.25-3.75 2.25-6-3-3-4.5-3-3 1.5-3 1.5-3-1.5-3-4.5 1.5-3 1.5-3-1.5-3-3-4.5S2.25 3.75 2.25 6.75z" />
//               </svg>
//             </div>
//             <div>
//               <p className="text-xs sm:text-sm text-gray-600">Need Any Help?</p>
//               <p className="text-base sm:text-lg font-semibold text-gray-900">+(1) 235 800 999</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaArrowRight, FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

export default function About() {
  return (
    <div className="px-5 md:px-12 xl:px-32 py-8 md:py-12 lg:py-16 relative">
      <img
        src="/images/about/bg.svg"
        alt="background"
        className="absolute inset-0 -z-10"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 md:gap-y-5">
        <div className="relative">
          <img src="/images/about/1.webp" alt="img1" className="img1" />
          <div className=" feedBack hidden md:flex absolute right-10 xl:right-0 top-20 -rotate-z-90 -m-2  items-center gap-x-4 text-white">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#7c877f] font-bold text-sm">
              95%
            </div>
            <p className="text-sm  font-semibold text-gray-400">
              Positive Feedback
            </p>
          </div>

          <img
            src="/images/about/2.webp"
            alt="img2"
            className="img2 absolute w-[290px] md:w-auto bottom-8  right-0   md:right-10 md:-bottom-16"
          />
          <img
            src="/images/about/shape.svg"
            alt="shape-img"
            className="mt-8  w-12 md:w-auto  xl:block"
          />

          <div className="experience absolute top-[50%] left-[0%] md:left-[30%] w-28 h-28 lg:w-36 lg:h-36 rounded-full text-white bg-[#7c877f] border-4 border-white flex flex-col justify-center items-center text-center shadow-lg">
            <h6 className="text-2xl lg:text-4xl font-bold flex items-center gap-1">
              15 <FaPlus className="text-sm" />
            </h6>
            <p className="text-xs lg:text-base mt-1 leading-tight">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="space-y-4 md:space-y-6">
          <button className="group text-[#7c877f] text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded   transition-all duration-300">
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
              <img src="/images/about/arrow.svg" alt="Arrow" className="" />
            </span>
            About Us
          </button>

          <h5 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Our passion for design, your{" "}
            <span className="text-[#7c877f]">vision realized</span>
          </h5>

          <p className="text-base leading-relaxed text-gray-700">
            Our dedicated team of designers works closely with you to understand
            your vision and bring it to life with thoughtful attention to detail
            — whether it's transforming a single room or an entire home.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4 text-nowrap">
              {["creative expertise", "client-centered approach"].map(
                (item, idx) => (
                  <p
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-800"
                  >
                    <span className="w-5 aspect-square rounded-full bg-[#7c877f] text-white flex items-center justify-center">
                      <IoMdCheckmark />
                    </span>

                    {item}
                  </p>
                )
              )}

              {/* <button className="flex items-center gap-3 text-sm font-semibold bg-[#7c877f] text-white px-5 py-3 rounded hover:bg-[#5d675f] transition-all duration-300">
               
                <FaArrowRightLong size={16} />
              </button> */}

              <button className="relative w-fit group flex gap-x-4 items-center px-8 py-4 bg-[#7c877f] text-white text-sm font-semibold hover:bg-[#000] hover:text-[#fff]  transition duration-300">
                <span> Read More</span>
                <span className="transition-transform transform group-hover:translate-x-1">
                  <FaArrowRight />
                </span>
              </button>
            </div>

            <div className="space-y-6 hidden md:block">
              {/* Call Section */}
              <div className="flex items-center gap-4">
                <span className="bg-[#7c877f] h-12 w-12 rounded-full text-white flex items-center justify-center text-xl">
                  <BiSolidPhoneCall />
                </span>
                <div>
                  <span className="block text-xs uppercase text-gray-500">
                    Need any help?
                  </span>
                  <h4 className="font-bold text-lg lg:text-xl">
                    +(1) 235 800 999
                  </h4>
                </div>
              </div>

              {/* Founder Info */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src="https://html.awaikenthemes.com/inspaire/images/author-1.jpg"
                    alt="Leslie Alexander"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg lg:text-xl">
                    Leslie Alexander
                  </h4>
                  <span className="text-sm text-gray-600">Co-Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
