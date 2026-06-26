import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const secondaryRef = useRef(null);
  const contactBtnRef = useRef(null);
  const resumeBtnRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade-in
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.out" }
      );

      // Title
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      // Subheading
      gsap.fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power2.out" }
      );

      // Secondary line
      gsap.fromTo(
        secondaryRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.7, ease: "power2.out" }
      );

      // Buttons
      gsap.fromTo(
        [contactBtnRef.current, resumeBtnRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.9, stagger: 0.15, ease: "power2.out" }
      );

      // Social icons (stagger)
      if (iconsRef.current) {
        gsap.fromTo(
          iconsRef.current.children,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.6,
            stagger: 0.15,
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

  const handleProjectClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen overflow-hidden text-black"
    >
      {/* Left social icons */}
      <div
        ref={iconsRef}
        className="hidden md:flex absolute left-4 bottom-1/4 flex-col items-center text-gray-400 z-20 space-y-5"
      >
        <a href="https://www.linkedin.com/in/vivekrajpoot14/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn className="hover:text-black transition-colors duration-300" />
        </a>
        <a href="https://github.com/vr7517" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="hover:text-black transition-colors duration-300" />
        </a>
        <a href="mailto:vivekrajput1924345@gmail.com" aria-label="Email">
          <FaEnvelope className="hover:text-black transition-colors duration-300" />
        </a>
        <div className="h-12 w-px bg-gray-300 opacity-70 mt-2"></div>
      </div>

      {/* Right scroll indicator */}
      <div className="hidden md:flex absolute right-4 bottom-1/4 flex-col items-center z-20">
        <span className="text-xs tracking-[0.3em] text-gray-400 rotate-90">SCROLL</span>
        <div className="w-px h-12 bg-gray-300 opacity-70 mt-6"></div>
      </div>

      <div className="relative z-10 h-full w-full mx-auto flex flex-col justify-center items-center gap-3.5 sm:gap-6 px-5 md:px-8 max-w-5xl text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-500">
          Vivek Rajpoot · 2+ Years Experience
        </span>

        <h1
          ref={titleRef}
          className="font-[font1] text-black text-[11vw] sm:text-[8vw] lg:text-[6.5vw] leading-[1.02] uppercase tracking-tight"
        >
          Data Analyst &amp; <br className="hidden sm:block" /> Analytics Engineer
        </h1>

        <p
          ref={subRef}
          className="text-sm sm:text-xl text-gray-600 max-w-2xl leading-relaxed px-2"
        >
          Transforming raw data into meaningful business insights.
        </p>

        <p
          ref={secondaryRef}
          className="text-xs sm:text-base text-gray-400"
        >
          Web Development as a secondary specialization.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto px-6 sm:px-0">
          <button
            ref={contactBtnRef}
            onClick={handleProjectClick}
            className="rounded-full bg-black px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-gray-800 hover:scale-[1.03]"
          >
            View Projects
          </button>
          <button
            ref={resumeBtnRef}
            onClick={handleResumeClick}
            className="rounded-full border border-black px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-[1.03]"
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}
