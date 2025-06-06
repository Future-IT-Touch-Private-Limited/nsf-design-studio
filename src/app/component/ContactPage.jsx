import React from "react";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa";
import { IoLocationOutline, IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import CommonBanner from "./CommonBanner";

export default function ContactPage() {
  return (
    <div>
      <CommonBanner name="contact Us" />

      <div className="px-4  sm:px-6 md:px-8 lg:px-24 xl:px-32 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6 relative">
          <img
            src="/images/arrow.webp"
            alt="anime"
            className="absolute right-0 top-0 form-anime hidden md:block -z-10"
          />

          <div className="space-y-4 md:space-y-2">
            <button className="group text-[#7c877f] text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded   transition-all duration-300">
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                <img src="/images/about/arrow.svg" alt="Arrow" className="" />
              </span>
              Get in Touch
            </button>

            <h5 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Find us here. Make real{" "}
              <span className="text-[#7c877f]">results happen</span>
            </h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="space-y-5 ">
              <div className="flex items-center gap-x-4 border-b border-gray-300 pb-4">
                <div className="w-9 h-9 aspect-square rounded-full bg-[#7c877f] hover:bg-[#6a756c] flex items-center justify-center text-white ">
                  <FaLocationDot className="text-lg" />
                </div>
                <p className="text-base lg:text-lg">
                  #689/404, 1st floor, Varthur Main Road, Gandhi circle,
                  Bangalore, Karnataka India - 560087
                </p>
              </div>

              <div className="flex items-center gap-x-4 border-b border-gray-300 pb-4">
                <div className="w-9 h-9 aspect-square rounded-full bg-[#7c877f] hover:bg-[#6a756c] flex items-center justify-center text-white ">
                  <BiSolidPhoneCall className="text-lg" />
                </div>
                <div className="flex flex-col text-base lg:text-lg">
                  <a href="tel:+91 82968 19909">+91 82968 19909</a>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="w-9 h-9 aspect-square rounded-full bg-[#7c877f] hover:bg-[#6a756c] flex items-center justify-center text-white ">
                  <IoMail className="text-lg" />
                </div>
                <div className="flex flex-col text-base lg:text-lg">
                  <a href="mailto:nsfstudiodesign@gmail.com">
                    nsfstudiodesign@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-black hidden md:block lg:hidden  xl:block text-white w-full h-full p-5 rounded-lg shadow-md">
              <h5 className="text-lg font-semibold text-[#CDA274] mb-4">
                Opening Hours
              </h5>
              <table className="w-full text-left border-separate border-spacing-y-2">
                <tbody>
                  <tr className="border border-white border-opacity-20 rounded">
                    <td className="py-2 px-3 font-bold">Mon - Wed</td>
                    <td className="py-2 px-3 text-gray-400">9:30AM - 6 PM</td>
                  </tr>
                  <tr className="border border-white border-opacity-20 rounded">
                    <td className="py-2 px-3 font-bold">Thu - Sat</td>
                    <td className="py-2 px-3 text-gray-400">10 AM - 6.:30 PM</td>
                  </tr>
                  <tr className="border border-white border-opacity-20 rounded">
                    <td className="py-2 px-3 font-bold">Sunday</td>
                    <td className="py-2 px-3 text-gray-400">Off Day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CDA274]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CDA274]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CDA274]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CDA274]"
            ></textarea>
            {/* <button
              type="submit"
              className="bg-[#CDA274]  hover:bg-[#b88c60] text-white font-semibold px-6 py-3 rounded transition-all "
            >
              Send Now
            </button> */}

            <button className="relative w-fit group flex gap-x-4 items-center px-8 py-4 bg-[#7c877f] text-white text-sm font-semibold hover:bg-[#000] hover:text-[#fff]  transition duration-300">
              <span>Send Now</span>
              <span className="transition-transform transform group-hover:translate-x-1">
                <FaArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* map  */}
      <div className="">
        <div className="w-full h-[300px] lg:h-[450px]">
          <iframe
          
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.249145140753!2d77.70876137793631!3d12.955902954761498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae120bd9f36467%3A0xe18f2e5ce1d1bb9f!2sVarthur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1749184378280!5m2!1sen!2sin"

            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}


