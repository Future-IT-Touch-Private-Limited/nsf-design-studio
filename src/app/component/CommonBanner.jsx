import React from 'react'
import Link from 'next/link'

export default function CommonBanner({name}) {
  return (
    <>
              <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('https://html.awaikenthemes.com/inspaire/images/page-header-bg.jpg')] h-[30vh] md:h-[40vh] xl:h-[55vh] flex flex-col justify-center items-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-3xl md:text-5xl lg:text-6xl capitalize font-bold">{name}</h1>
            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">Home</Link>
<span>/</span>
              <span className="font-medium">{name}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
