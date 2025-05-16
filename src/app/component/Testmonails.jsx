"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
export default function Testmonails() {

    const testmonails=[
        {
          "quote": "From the moment I stepped into this journey, a sense of calm enveloped me. Each day feels like a peaceful retreat into serenity, where even the smallest joys feel magnified. The dedication, the detail, the feeling of being truly heard—it’s rare to find. This space was crafted not just for beauty, but for peace. And in that peace, I found a version of myself I hadn’t seen in years."

,
          "author": {
            "name": "Smith",
            "position": "CEO, InDesign",
            "image": "/images/testmonails/2.webp"
          }
        },
        {
          "quote": "There’s a kind of magic here that’s difficult to describe. It's in the quiet corners, the thoughtful details, and the way every interaction feels personal. I've never experienced such harmony in a space before. It’s as if this was made with the soul in mind. Every time I return, I’m reminded of what it means to truly feel at home, inside and out."

,
          "author": {
            "name": "John Doe",
            "position": "Founder, TechCorp",
            "image": "/images/testmonails/2.webp"
          }
        },
        {
          "quote": "It’s the kind of place that doesn’t just change how you live—it changes how you feel. From the moment I walked in, I felt a wave of comfort, like being wrapped in warm sunlight. It’s more than design; it’s emotion, memory, and atmosphere all rolled into one. I’m not just a guest in this space. I belong here. And that’s something I’ll always carry with me."

,
          "author": {
            "name": "Emily Watson",
            "position": "Creative Director, Artistry Studios",
            "image": "/images/testmonails/2.webp"
          }
        },
        {
          "quote":"I never imagined how much a thoughtfully designed space could impact my daily life. The atmosphere here speaks in soft whispers of calm, inspiration, and comfort. It’s a place where I can breathe deeply, think clearly, and just be. It’s not flashy or overwhelming—just perfectly attuned to what the heart and mind need most. This experience has been transformative."

,
          "author": {
            "name": "Michael Lee",
            "position": "Marketing Manager, GlobalTech",
            "image": "/images/testmonails/2.webp"
          }
        },
        {
          "quote": "Peace found me here. Not in grand gestures, but in quiet mornings, gentle textures, and the unspoken feeling that everything was created with care. I didn’t expect to feel this renewed, this reconnected with myself. Each detail feels like a reflection of someone who truly understands how beauty and stillness can heal. It’s been more than a stay—it’s been a shift."

,
          "author": {
            "name": "Olivia Green",
            "position": "Executive, Green Ventures",
            "image": "/images/testmonails/2.webp"
          }
        }
      ]


      const TestMon=({elm})=>(
        <div className='flex flex-col items-center lg:space-y-6 text-center text-white'>
        <h5 className='text-xl md:text-2xl font-semibold text-opacity-70'>Testimonial</h5>
        <span className='text-3xl lg:text-4xl font-bold text-opacity-80'>“</span>
    <div className='flex flex-col-reverse gap-y-4 items-center lg:flex-col  lg:space-y-6'>
    <p className='text-base text-justify md:text-center md:text-lg lg:text-xl max-w-4xl mx-auto mt-4 px-4'>
            {elm.quote}
        </p>

        <div className='flex flex-col md:flex-row items-center gap-x-4 mt-6'>
          <img 
            src="/images/testmonails/2.webp" 
            alt="Person" 
            className='w-16 h-16 rounded-full border-4 border-white shadow-lg'
          />
          <div className='text-xl md:text-2xl'>
            <h5 className='font-bold text-lg'>{elm.author.name}</h5>
            <p className='text-opacity-70'>{elm.author.position}</p>
          </div>
        </div>
    </div>
      </div>
      )

  return (
    <div className='flex px-5 md:px-12 xl:px-32 items-center justify-center h-full py-10  lg:h-[80vh] bg-cover bg-center' style={{ backgroundImage: 'url(/images/testmonails/1.webp)' }}>

<Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testmonails.map((elm,index)=>(
            <SwiperSlide key={index}>

                <TestMon elm={elm}/>
            </SwiperSlide>

        ))}
      
      </Swiper>

  
    </div>
  )
}
