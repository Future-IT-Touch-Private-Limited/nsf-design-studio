'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { swiperBlogList } from '../blogdata'
export default function LatestPostsSection() {



  const pathName=usePathname()
  return (
    <section className="px-5 md:px-12 xl:px-32 py-10 lg:py-20 bg-white bg-[url('/images/section-bg-shape-1.svg')] bg-cover bg-center bg-no-repeat w-full">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
           

            <button className="group text-[#7c877f] text-sm inline-flex items-center gap-2 font-semibold px-5 py-2 rounded  transition-all duration-300">
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
              <img src="/images/about/arrow.svg" alt="Arrow" className="" />
            </span>
            What we do
          </button>

          <h5 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          Latest posts & <span className="text-[#7c877f]">articles</span>
          </h5>
          </div>
            {pathName!=="/blogs/" &&   <Link href="/blogs">
            <span className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition duration-300 cursor-pointer text-sm sm:text-base">
              See all blogs
            </span>
          </Link>}
        
        </div>

        {/* Blog layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 space-y-8">
            {swiperBlogList.slice(0,3).map((post, index) => (
              <Link href={`/blogs/${post.title.toLowerCase().split(" ").join("-")}`} key={index} className="flex items-start gap-5 group">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-24 h-20 sm:w-28 sm:h-24 object-cover rounded-xl shadow-md shrink-0"
                />
                <div>
                  <div className="text-xs sm:text-sm text-gray-400 flex flex-wrap items-center gap-4 mb-1">
                    <span className="flex items-center gap-1">
                      <i className="pbmit-base-icon-calendar-3" /> May 09, 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="pbmit-base-icon-user-3" /> By admin
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-black group-hover:text-[#7c877f] transition">
                    <p >{post.title}</p>
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Right column */}
          <div className="lg:w-1/2">
            <div className="flex flex-col md:flex-row items-center border border-gray-200 p-5 rounded-xl shadow-md gap-6 h-full">
              <div className="w-full md:w-1/2">
                <img
                  src="/images/service-3.webp"
                  alt="Featured Blog"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-4 mb-2">
                  <span className="flex items-center gap-1">
                    <i className="pbmit-base-icon-calendar-3" /> May 09, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="pbmit-base-icon-user-3" /> By admin
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black hover:text-blue-600 transition mb-3 leading-snug">
                  <Link href="/blog-single-details">
                    {/* {swiperBlogList[4].title} */}
                    How To Choose The Right Furniture Of Your Home
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Modest, recently established interior design company that seeks to address a variety of topics, including…
                </p>
                <Link href={`/blogs/${swiperBlogList[4].title.toLowerCase().split(" ").join("-")}`} >
                  <span className="inline-flex items-center text-blue-600 font-medium hover:underline text-sm cursor-pointer">
                    <i className="pbmit-base-icon-pbmit-up-arrow mr-2" />
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
