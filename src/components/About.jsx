import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2+", label: "Years in Analytics" },
  { value: "15+", label: "Dashboards Shipped" },
  { value: "60%", label: "Avg. Manual Work Saved" },
];

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -80,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: imageRef.current, start: "top 85%" },
      });

      gsap.from(textRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: textRef.current, start: "top 85%" },
      });

      gsap.from(statsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 90%" },
      });

      gsap.from(buttonsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: buttonsRef.current, start: "top 92%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:mx-8 lg:px-10 text-black overflow-hidden border border-dashed border-gray-200"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10 md:gap-16 py-16">
        {/* Left Image */}
        <div
          ref={imageRef}
          className="w-full lg:w-2/5 flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border border-gray-200" aria-hidden></div>
            <img
              src="/person1.png"
              alt="Vivek Rajpoot"
              className="relative w-72 sm:w-96 object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div ref={textRef} className="w-full lg:w-3/5 flex flex-col gap-6 text-center lg:text-left">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-8 h-px bg-black"></div>
            <span className="text-xs tracking-[0.25em] uppercase text-gray-500">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Turning data into <br className="hidden sm:block" /> decisions that matter
          </h2>

          <p className="text-gray-600 leading-relaxed">
            I&apos;m <strong className="text-black">Vivek Rajpoot</strong>, a Data Analyst &amp;
            Analytics Engineer with 2+ years of experience turning messy, raw data into clear,
            actionable insights. I design and build interactive{" "}
            <strong className="text-black">Power BI</strong> dashboards, write performant{" "}
            <strong className="text-black">SQL</strong>, and engineer end-to-end data pipelines on{" "}
            <strong className="text-black">Microsoft Fabric</strong> — giving stakeholders a single,
            trustworthy source of truth.
          </p>

          <p className="text-gray-600 leading-relaxed">
            My work focuses on <strong className="text-black">measurable business impact</strong>:
            automating manual reporting, modeling data for self-service analytics, and surfacing the
            metrics that drive faster, better decisions. Alongside analytics, I bring a solid{" "}
            <strong className="text-black">web development</strong> background (React &amp; Laravel)
            as a supporting skill set for building data-driven tools.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-4 border-y border-gray-200 py-6 mt-2"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-black">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <a
              href="#contact"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 text-center"
            >
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-gray-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:border-black hover:bg-gray-50 text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
