import React from "react"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Home() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="relative z-10 h-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 p-6 md:p-8">
        
        {/* Social Icons - Left */}
        <div className="hidden md:flex absolute left-4 bottom-1/4 flex-col items-center text-gray-400 z-20 space-y-4">
          <a href="#"><FaFacebookF className="hover:text-orange-500 transition" /></a>
          <a href="#"><FaTwitter className="hover:text-orange-500 transition" /></a>
          <a href="#"><FaLinkedinIn className="hover:text-orange-500 transition" /></a>
          <div className="h-12 w-px bg-gray-300 dark:bg-gray-600 opacity-50 mt-2"></div>
        </div>

        {/* Scroll Text - Right */}
        <div className="hidden md:flex absolute right-4 bottom-1/4 flex-col items-center z-20">
          <span className="text-sm tracking-widest text-gray-400 rotate-90">SCROLL</span>
          <div className="w-px h-12 bg-gray-300 dark:bg-gray-600 opacity-50 mt-6"></div>
        </div>

{/*        
        <img
          src="/person1.png"
          alt="Profile Background"
          className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-40 sm:w-60 md:w-80 lg:w-96 rounded-full object-cover pointer-events-none"
        /> */}

        {/* Center Content */}
        <div className="z-10 w-full max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            We Design & Build <br className="hidden sm:block" /> Creative Products
          </h1>

          <button className="mt-6 px-6 py-2 border text-center border-gray-300 text-gray-300 hover:bg-white hover:text-black transition duration-300">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  )
}
