import React, { useEffect, useRef } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactBtnRef = useRef(null);
  const resumeBtnRef = useRef(null);
  const iconsRef = useRef(null);
  const imagePin = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(imagePin.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
        y: -100,
        ease: "none",
      });
      // Section fade-in
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      // Title
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );

      // "Get in Touch" button
      gsap.fromTo(
        contactBtnRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
      );

      // "View Resume" button
      gsap.fromTo(
        resumeBtnRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.3, ease: "power2.out" }
      );

      // Icons (stagger)
      if (iconsRef.current) {
        gsap.fromTo(
          iconsRef.current.children,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.4,
            stagger: 0.2,
            ease: "back.out(1.7)",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen overflow-hidden text-[#EFEFE6]"
    >
      <div
        ref={iconsRef}
        className="hidden md:flex absolute left-4 bottom-1/4 flex-col items-center text-gray-400 z-20 space-y-4"
      >
        <a href="#"><FaFacebookF className="hover:text-orange-500 transition" /></a>
        <a href="#"><FaTwitter className="hover:text-orange-500 transition" /></a>
        <a href="#"><FaLinkedinIn className="hover:text-orange-500 transition" /></a>
        <div className="h-12 w-px bg-gray-300 dark:bg-gray-600 opacity-50 mt-2"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute right-4 bottom-1/4 flex-col items-center z-20">
        <span className="text-sm tracking-widest text-gray-400 rotate-90">SCROLL</span>
        <div className="w-px h-12 bg-gray-300 dark:bg-gray-600 opacity-50 mt-6"></div>
      </div>
      {/* Side Email */}
      <div className="absolute top-1/2 -left-20 hidden sm:flex rotate-90 bg-[#EFEFE6] text-black px-12 py-6">
        vivekrajput1924345@gmail.com
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-screen max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 p-6 md:p-8 border border-gray-300 dark:border-neutral-800">
        {/* Social Icons */}

        <div ref={imagePin} className="absolute h-screen w-1/2 opacity-10 top-0 ">
          <img src="/person1.png" alt="" />
        </div>

        {/* Center Content */}
        <div className="relative  w-full h-screen justify-between flex flex-col py-20 max-w-5xl text-center">
          <h1
            ref={titleRef}
            className="font-[font2] text-black dark:text-white text-[6vw] leading-[6vw] uppercase"
          >
            Turning Bold Ideas into <br className="hidden sm:block" />  Web Products
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button
              ref={contactBtnRef}
              className="px-6 py-3 border border-black bg-orange-600 text-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              GET IN TOUCH
            </button>

            <button
              ref={resumeBtnRef}
              onClick={handleResumeClick}
              className="px-6 py-3 border border-orange-600 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition duration-300"
            >
              VIEW RESUME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
