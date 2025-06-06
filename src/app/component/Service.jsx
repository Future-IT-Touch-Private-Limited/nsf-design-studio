"use client"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { serviceData as service} from "../servicedata";
import { useState } from "react";
export default function OurServices() {

  const pathName=usePathname()

  const [show,setShow]=useState(6)
 
  return (
    <section className="our-services px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16 bg-white">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:mb-16 lg:gap-10  gap-3 md mb-6 md">
          <div className="lg:w-1/2">
            <div className="section-title">
            <button className="group text-[#7c877f] text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded  transition-all duration-300">
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
              <img src="/images/about/arrow.svg" alt="Arrow" className="" />
            </span>
           Our service
          </button>

          <h5 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          Innovative design services <br className="hidden lg:block" /> for {" "}
            <span className="text-[#7c877f]">every need</span>
          </h5>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
              We offer a range of bespoke interior design services tailored to your unique needs — from concept development to final installation.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {service.slice(0,show).map((service, index) => (
            <Link
            href={`/service/${service.title.toLowerCase().split(" ").join("-")}`}
              key={index}
              className="bg-white border border-gray-200  overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300"
            >
              <div >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-black transition">
                 {service.title}
                </h3>
                <p className="text-gray-600 text-justify lg:text-start text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>


          {/* {pathName!=="/service" && (
            <Link href="/" className="relative mx-auto mt-16 w-fit group flex gap-x-4 items-center px-8 py-4 bg-[#7c877f] text-white text-sm font-semibold hover:bg-[#000] hover:text-[#fff]  transition duration-300">
                        <span> See All Services</span>
                        <span className="transition-transform transform group-hover:translate-x-1">
                          <FaArrowRight />
                        </span>
                      </Link>
          )} */}

            {show < service.length &&             <button onClick={()=>setShow((prev)=>prev+6)}  className="relative mx-auto mt-16 w-fit group flex gap-x-4 items-center px-8 py-4 bg-[#7c877f] text-white text-sm font-semibold hover:bg-[#000] hover:text-[#fff]  transition duration-300">
                        <span> See All Services</span>
                        <span className="transition-transform transform group-hover:translate-x-1">
                          <FaArrowRight />
                        </span>
                      </button>
}


       
      </div>
    </section>
  );
}
