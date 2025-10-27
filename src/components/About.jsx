import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Animation (slide from left)
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });

      // Text Animation (slide from right)
      gsap.from(textRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });

      // Buttons Animation (staggered fade-up)
      gsap.from(buttonsRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
         className="relative min-h-screen flex items-center justify-center text-center  sm:px-4 sm:mx-8  lg:px-10 text-white overflow-hidden border border-dashed border-neutral-200 dark:border-neutral-700 ">
    
     <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-12">
        
        {/* Left Image Section */}
        <div
          ref={imageRef}
          className=" overflow-hidden col-span-1 flex justify-center items-center"
        >
          <img
            src="/person1.png"
            alt="Profile"
            className="sm:max-w-lg  object-center"
          />
        </div>

        {/* Right Content Section */}
        <div ref={textRef} className="w-full flex flex-col gap-6 text-center lg:text-left col-span-2">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-px h-10 bg-gray-400"></div>
            <span className="text-lg tracking-widest uppercase text-gray-400">
              About Me
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Let Me Build Your <br /> Next Big Thing!
          </h1>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi! I’m Vivek Rajpoot, a passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications. I enjoy crafting clean, scalable solutions using React, Laravel, Tailwind CSS, and MySQL. I thrive on turning ideas into real products with efficient code, team collaboration, and agile practices.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <button className="bg-orange text-white px-6 py-2 rounded-md font-semibold transition hover:bg-orange-500">
              HIRE ME
            </button>
            <button className="border border-gray-400 hover:border-orange hover:text-orange text-white px-6 py-2 rounded-md font-semibold transition">
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
