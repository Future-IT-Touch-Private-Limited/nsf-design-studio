import React from "react";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { swiperBlogList } from "../blogdata";
import { FaArrowRightLong } from "react-icons/fa6";
export default function BlogInner({ singleBlog }) {
 

  return (
    <div>
    <div className="relative text-white">
      <div className="bg-cover bg-center bg-no-repeat relative bg-[url('https://html.awaikenthemes.com/inspaire/images/page-header-bg.jpg')] h-[30vh] md:h-[40vh] xl:h-[55vh] flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center px-4 sm:px-8 md:px-16 xl:px-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-bold">
            {singleBlog.title}
          </h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm sm:text-base">
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium">blogs / {singleBlog.title}</span>
          </div>
        </div>
      </div>
    </div>
  
    <div className="px-4 sm:px-8 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
      <div className="container mx-auto flex flex-col lg:grid  lg:grid-cols-3 gap-x-16 gap-y-8">
      <div className="lg:col-span-2">
        <img
        src={singleBlog.image}
        alt="Blog Cover"
        className="w-full h-[40vh] md:h-[60vh] lg:max-h-[70vh] object-cover object-center rounded-md shadow-md"
      />
  
      <div className="mt-6 lg:mt-12  space-y-8 lg:space-y-12">
        <div className="space-y-4">
          {singleBlog.desc.slice(0, 2).map((elm, index) => (
            <p key={index} className="leading-relaxed text-gray-700">
              {elm}
            </p>
          ))}
        </div>
  
        {/* Quote */}
        <div className="bg-[#7c877f] p-5 lg:p-8 rounded-md shadow flex items-start gap-4">
          <img src="/images/quote.svg" alt="Quote Icon" className="w-6 h-6 mt-1" />
          <p className="text-white text-lg lg:text-xl font-semibold">
            {singleBlog.quote}
          </p>
        </div>
  
        <div className="space-y-4">
          {singleBlog.desc.slice(2, 3).map((elm, index) => (
            <p key={index} className="leading-relaxed text-gray-700">
              {elm}
            </p>
          ))}
        </div>
  
        <div className="space-y-4">
          <h5 className="font-bold text-2xl md:text-3xl xl:text-4xl">
            {singleBlog.attactionHeading}
          </h5>
          <p>{singleBlog.attactionPara}</p>
          <ul className="list-disc list-inside space-y-2">
            {singleBlog.attacrtionList.map((elm, index) => (
              <li key={index}>{elm}</li>
            ))}
          </ul>
          <p>{singleBlog.attactionConcluion}</p>
        </div>
  
        <hr className="border-t border-gray-300 my-6" />
  
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-wrap">
            <h5 className="text-xl font-semibold">Tags:</h5>
            <div className="flex flex-wrap gap-2">
              {singleBlog.tage.map((elm, index) => (
                <button
                  key={index}
                  className="bg-[#7c877f] text-white px-4 py-2 rounded hover:bg-[#6a756c] transition"
                >
                  {elm}
                </button>
              ))}
            </div>
          </div>
  
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-[#7c877f] hover:bg-[#6a756c] rounded flex items-center justify-center text-white">
              <RiInstagramFill className="text-lg" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-[#7c877f] hover:bg-[#6a756c] rounded flex items-center justify-center text-white">
              <FaFacebook className="text-lg" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-[#7c877f] hover:bg-[#6a756c] rounded flex items-center justify-center text-white">
              <FaTwitter className="text-lg" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-[#7c877f] hover:bg-[#6a756c] rounded flex items-center justify-center text-white">
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>
      </div>
        </div>
        <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-0">
              <div className="border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
                <h5 className="text-xl lg:text-2xl capitalize font-semibold text-gray-800">
                 Latest Blogs
                </h5>
                <hr className="border-gray-200" />
                <div className="space-y-3">
                  {swiperBlogList.map((blog, index) => (
                    <Link
                    href={`/blogs/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`}
                      key={index}
                      className="flex items-center justify-between text-gray-500 hover:text-black group transition-colors duration-300"
                    >
                      <span className="text-sm lg:text-base transition-colors duration-300">
                        {blog.title}
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
                      <a href="tel: +91 82968 19909" className="text-sm text-gray-700 group-hover:text-black transition duration-300">
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
       
      </div>
     
    </div>
  </div>
  
  );
}
