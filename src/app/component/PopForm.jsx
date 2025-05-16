"use client"
import React, { useEffect, useState } from "react"
import { RxCross2 } from "react-icons/rx"

export default function PopForm() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showPopup])

  const handleClose = () => setShowPopup(false)

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-[99] bg-black/60 flex justify-center items-center p-4 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[800px] relative overflow-hidden animate-fade-in">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          onClick={handleClose}
        >
          <RxCross2 />
        </button>

        <div className="grid md:grid-cols-2">
          <img
            src="/images/pop.webp"
            alt="Offer"
            className="w-full hidden md:block h-full object-cover rounded-l-xl"
          />

          {/* Form Section */}
          <div className="p-6 md:p-8 space-y-5">
            <h4 className="text-2xl font-bold text-[#333]">Get a Free Design Consultation</h4>

            {/* Property Type */}
            <div>
              <label className="block font-medium mb-2">Property Type</label>
              <div className="flex flex-wrap gap-2">
                {["1BHK", "2BHK", "3BHK", "4BHK / Duplex"].map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                      selectedProperty === type
                        ? "bg-[#7D4533] text-white border-[#7D4533]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedProperty(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Property Location"
                className="w-full border border-gray-300 p-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#7D4533]"
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 p-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#7D4533]"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 p-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#7D4533]"
              />
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1" />
                <label>Yes, send me updates via WhatsApp</label>
              </div>
              <button className="w-full bg-[#7D4533] hover:bg-[#643828] text-white py-3 rounded text-sm transition-all">
                Book a Free Consultation
              </button>
              <p className="text-xs text-gray-500 text-center">
                By submitting, you consent to our{" "}
                <span className="text-[#7D4533] underline">privacy policy</span> and terms of use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
