import React from "react"

export default function About() {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16  rounded-lg  p-6 md:p-8  transition-all duration-300">
        
        {/* Left Image Section */}
        <div className="w-full rounded-full overflow-hidden shadow-[0_0_30px_#f97316]">
          <img
            src="/person1.png"
            alt="Profile"
            className="max-w-xl h-full object-cover rounded-full border-4 border-orange"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full flex flex-col gap-6 text-center lg:text-left">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-px h-10 bg-gray-400"></div>
            <span className="text-lg tracking-widest uppercase text-gray-400">About Me</span>
          </div>
          
          <h1 className="h1">
            Let Me Build Your <br/> Next Big Thing!
          </h1>
          
          <p className="p">
            Hi! I’m Harsh Doiphode, a passionate Web Developer focused on building modern, responsive, and user-friendly apps. I enjoy crafting clean, scalable web solutions using React, Node.js, and Laravel. I thrive on turning ideas into reality with efficient code, team collaboration, and agile practices.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-orange text-white px-6 py-2 rounded-md font-semibold transition hover:bg-orange">
              HIRE ME
            </button>
            <button className="border border-black dark:border-white hover:border-orange hover:text-orange text-black dark:text-white px-6 py-2 rounded-md font-semibold transition">
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
