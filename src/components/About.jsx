import React from "react"

export default function About() {
  return (
      <section id="about">
              <div className="h-screen w-11/12  mx-auto flex justify-center items-center gap-16 border border-dashed border-gray-600 rounded-lg shadow p-8 dark:border-gray-300 ">
               {/* Left Image Section */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full  shadow-[0_0_30px_#f97316]">
  <img
    src="/WhatsApp Image 2024-01-09 at 14.17.22_7c7d09f1.jpg"
    alt="Profile"
    className="w-full h-full object-cover rounded-full  border-orange-500"
  />
</div>


        {/* Right Content Section */}
                 <div className="max-w-xl flex flex-col gap-6 ">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-px h-10 bg-gray-400"></div>
            <span className="text-lg tracking-widest uppercase text-gray-400">About Me</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
           Let Me Build Your Next Big Thing!
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
           Hi! I’m Harsh Doiphode, a passionate Web Developer with a strong focus on building modern, responsive, and user-friendly applications. I enjoy crafting clean and scalable web solutions using technologies like React, Redux, Node.js, and Laravel. I’m enthusiastic about turning ideas into reality through creative and efficient solutions, and I’m always eager to learn new tools and frameworks. Along with working on several full-stack projects, I have experience collaborating with teams, managing source control with Git, and following agile practices like daily stand-ups and sprint planning to deliver quality products on time.
          </p>
          <div className="flex gap-4">
            <button className=" bg-[#f97316]  text-white px-6 py-3 rounded-md font-semibold transition-all ">
              HIRE ME
            </button>
            <button className="border border-black hover:border-[#f97316] hover:text-[#f97316] text-black  px-6 py-3 rounded-md font-semibold transition-all ">
              DOWNLOAD CV
            </button>
          </div>
        </div>
              </div>
            </section>
  )
}
