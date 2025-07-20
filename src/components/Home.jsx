import React from "react"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Home() {
  return (
    <section id="home">
     <div className="relative h-screen max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16  rounded-lg  p-6 md:p-8  transition-all duration-300">
        
       <div className="max-w-5xl">
         {/* Social Icons - Left (Hidden on small screens) */}
        <div className="hidden md:flex absolute left-4 bottom-1/4 flex-col items-center text-gray-400 z-20 space-y-4">
          <a href="#"><FaFacebookF className="hover:text-orange transition" /></a>
          <a href="#"><FaTwitter className="hover:text-orange transition" /></a>
          <a href="#"><FaLinkedinIn className="hover:text-orange transition" /></a>
          <div className="h-12 w-px bg-gray-300 dark:bg-gray-600 opacity-50 mt-2"></div>
        </div>

        {/* Scroll Text - Right (Hidden on small screens) */}
        <div className="hidden md:flex absolute right-4 bottom-1/4 flex-col items-center z-20">
          <span className="text-sm tracking-widest text-gray-400 rotate-90">SCROLL</span>
          <div className="w-px h-12 bg-gray-300 dark:bg-gray-600 opacity-50 mt-6"></div>
        </div>

        {/* Center Content */}
        <div className="z-10 w-full max-w-3xl text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-300 dark:text-gray-400">
            We Design & Build <br className="hidden sm:block" /> Creative Products
          </h1>

          {/* Button */}
          <button className="mt-6 px-6 py-2 border text-center border-gray-400 text-gray-400 hover:bg-white hover:text-black dark:hover:text-black transition duration-300">
            GET IN TOUCH
          </button>
        </div>
       </div>
      </div>
    </section>
  )
}
