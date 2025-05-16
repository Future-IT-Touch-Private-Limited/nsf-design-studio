import React from "react";

export default function OurSkiils() {

    const progress=[
        {
            title:"space planning and layout",
            progress:"95%"
        },
        {
            title:"project challenges and solutions",
            progress:"85%"
        },
        {
            title:"sustainability and eco-friendly features",
            progress:"75%"
        },
    ]

  return (
    <div className="px-5 relative md:px-12 xl:px-32 mb- lg:mb-0 py-8 md:py-12 xl:py-16 container mx-auto xl:h-screen">
    <img src="/images/service/bg.svg" alt="bg" className="absolute inset-0 -z-10 " />
      <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 gap-y-16 gap-x-12">
        <div className="space-y-4 md:space-y-6">
          <button className="group text-[#7c877f] text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded   transition-all duration-300">
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
              <img src="/images/about/arrow.svg" alt="Arrow" className="" />
            </span>
            Our Skills
          </button>

          <h5 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Skills that shape your{" "}
            <span className="text-[#7c877f]">dream home</span>
          </h5>

          <p className="text-base leading-relaxed text-gray-700">
            Our dedicated team of designers works closely with you to understand
            your vision and bring it to life with thoughtful attention to
            detail.
          </p>

          <div className="space-y-4 md:space-y-6">
                {progress.map((elm,index)=>(
                    <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center capitalize">
                        <span>{elm.title}</span>
                        <span>{elm.progress}</span>
                    </div>
                        <div  className="h-4 overflow-hidden rounded-full bg-gray-200 w-full ">
                            <div className="h-full bg-[#192324] rounded-full" style={{width:`${elm.progress}`}} />
                        </div>
                    </div>
                ))}
          </div>
        </div>
        <div className="relative ">
            <img src="/images/service/shape.svg" alt="shape" className="absolute -z-10 -top-10" />
            <img src="/images/service/1.webp" alt="img1" className="w-[52%] h-full lg:w-auto lg:absolute top-0 left-10" />
            <img src="/images/service/2.webp" alt="img1" className="absolute w-[40%]  lg:w-auto top-0 right-0" />
            <img src="/images/service/3.webp" alt="img1" className="absolute w-[50%]  right-5 lg:w-auto -bottom-20 lg:right-10" />
        </div>
      </div>
    </div>
  );
}
