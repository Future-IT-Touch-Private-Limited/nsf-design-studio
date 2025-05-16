"use client";
import React from "react";
import CommonBanner from "./CommonBanner";
import LatestPostsSection from "./Blog";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { swiperBlogList } from "../blogdata";
import "swiper/css";

export default function BlogPage() {

  

 
  return (
    <div>
      <CommonBanner name="our blog" />
      <LatestPostsSection />

      <div className="px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
        <div className="">
          <Swiper
            loop={true}
            centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}

            className="mySwiper"
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {swiperBlogList.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-200  overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
                  <Link href={`/blogs/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`}
>
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                  <Link href={`/blogs/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-black transition">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {blog.description}
                    </p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
