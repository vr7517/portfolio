import React, { useEffect, useRef } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // Animate title
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      

      // Animate button
      gsap.from(buttonRef.current, {
        y: 80,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power2.out",
      });

      // Animate social icons (staggered)
      gsap.from(iconsRef.current.children, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
 <section
  ref={sectionRef}
  id="home"
  className="relative h-screen overflow-hidden text-white"
>
  {/* Background */}
  <div className="absolute inset-0  z-0"></div>
  {/* <img
    src="/person.png" // replace with your image path
    alt="Background"
    className="absolute inset-0 object-scale-down w-full h-full opacity-20 pointer-events-none z-0"
  /> */}

  <div className="relative z-10 h-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 p-6 md:p-8">
    
    {/* Social Icons - Left */}
    <div
      ref={iconsRef}
      className="hidden md:flex absolute left-4 bottom-1/4 flex-col items-center text-gray-400 z-20 space-y-4"
    >
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

    {/* Center Content */}
    <div className="relative  w-full max-w-3xl text-center">
      <h1
        ref={titleRef}
        className=" text-black dark:text-white text-4xl sm:text-5xl md:text-4xl font-bold leading-tight"
      >
        Turning Bold Ideas <br className="hidden sm:block" /> into Web Products
      </h1>

    <button
  ref={buttonRef}
  className="mt-6 px-6 py-3  border border-black bg-orange-500 text-white rounded-md hover:bg-white hover:text-black transition duration-300"
>
  GET IN TOUCH
</button>

    </div>
  </div>
</section>


  );
}
