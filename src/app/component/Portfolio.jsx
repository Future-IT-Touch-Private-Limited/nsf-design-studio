'use client'
import React, { useState } from "react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [portfolioItems] = useState([
    { id: 1, title: "Innovation", category: "Bedroom", image: "/images/service-3.webp", link: "" },
    { id: 2, title: "Minimalism", category: "Furniture", image: "/images/project-1.webp", link: "" },
    { id: 3, title: "Lighting", category: "Interior", image: "/images/project-3.webp", link: "" },
    { id: 4, title: "Bold Tiles", category: "Kitchen", image: "/images/project-4.webp", link: "" },
    { id: 5, title: "Clean lines", category: "Bedroom", image: "/images/service-2.webp", link: "" },
    { id: 6, title: "Integral", category: "Architecture", image: "/images/service-1.webp", link: "" },
  ]);

  const categories = ["All", "Architecture", "Bedroom", "Furniture", "Interior", "Kitchen"];
  const filteredItems = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="bg-light px-5 md:px-12 xl:px-32 py-8 md:py-12 xl:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Title Section */}
          <div className="md:w-1/3 xl:w-full">
            <div className="animation-style2">
              <button className="group text-[#7c877f] text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded  transition-all duration-300">
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
              <img src="/images/about/arrow.svg" alt="Arrow" className="" />
            </span>
            Projects
          </button>

          <h5 className="text-2xl text-nowrap  md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          Our Latest <span className="text-[#7c877f]">Project</span>
          </h5>
             
            </div>
          </div>

          {/* Scrollable Filter Tabs */}
          <div className="md:w-2/3 xl:w-3/4">
            <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 min-w-max md:justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`whitespace-nowrap font-bold text-sm sm:text-base px-4 py-2 rounded-full transition-colors ${
                      activeFilter === category
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="relative rounded-lg overflow-hidden shadow-md group">
                <img
                  src={item.image}
                  alt={`portfolio-${item.id}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm mb-1">{item.category}</p>
                  <h3 className="text-white font-semibold text-lg">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
