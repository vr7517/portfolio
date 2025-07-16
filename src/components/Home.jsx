import React from "react"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Home() {
  return (
    <section id="home">
      <div className="relative min-h-screen bg-darkbg dark:bg-gray-50 text-white flex items-center justify-center overflow-hidden text-center px-10">
        {/* Center Content */}
        <div className=" z-10 text-center w-9/12 px-6">
          {/* Social Icons - Left */}
          <div className="absolute left-1/8 bottom-1/4 -translate-y-1/6 flex flex-col gap-4 rounded-full text-center items-center text-gray-400 z-20">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            {/* Vertical Line */}
            <div className="h-12 w-px bg-gray-50 dark:bg-gray-800 text-center opacity-50 mt-2"></div>
          </div>

          {/* Scroll Text - Right */}
          <div className="absolute right-[17%] bottom-1/4 -translate-y-1/6 flex flex-col items-center z-20">
            <span className="text-sm tracking-widest text-gray-400 rotate-90">SCROLL</span>
            <div className="w-px h-12 bg-gray-50 dark:bg-gray-800 opacity-50 mt-6"></div>
          </div>

          {/* Background splash image */}
          {/* <img
          src="/person1.png" // Replace with splash image (transparent PNG)
          alt="Splash Background"
          className="absolute inset-0 mx-auto top-0 bottom-0 z-0 object-cover w-9/12 h-full opacity-80"
          style={{ mixBlendMode: 'screen' }}
        /> */}

        

          {/* Heading */}
          <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-400">
            We Design & Build <br /> Creative Products
          </h1>
         

          {/* Button */}
          <button className="relative z-10 mt-6 px-6 py-2 border border-gray-400 hover:bg-gray-100 hover:text-black transition text-gray-400">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  )
}


