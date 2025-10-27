import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react";

// 🌀 Register plugin
gsap.registerPlugin(ScrollTrigger);

// 🧠 Your imports for images (same as before)
import HTML5 from "../assets/logos/HTML5.png";
import CSS3 from "../assets/logos/CSS3.png";
import Angular from "../assets/logos/Angular.png";
import Bootstrap from "../assets/logos/Bootstrap.png";
import Cpp from "../assets/logos/C++ (CPlusPlus).png";
import Js from "../assets/logos/JavaScript-logo.png";
import Laravel from "../assets/logos/Laravel.png";
import Tailwind from "../assets/logos/Tailwind CSS.png";
import Php from "../assets/logos/PHP.png";
import Python from "../assets/logos/Python.png";
import ReactLogo from "../assets/logos/React.png";
import Typescript from "../assets/logos/TypeScript.png";
import Node from "../assets/logos/Node.js.png";
import Firebase from "../assets/logos/Firebase.png";
import Git from "../assets/logos/Git.png";
import Github from "../assets/logos/GitHub.png";
import MongoDB from "../assets/logos/MongoDB.png";
import MySQL from "../assets/logos/MySQL.png";
import NPM from "../assets/logos/NPM.png";
import Phpstorm from "../assets/logos/PhpStorm.png";
import Redis from "../assets/logos/Redis.png";
import Vscode from "../assets/logos/Visual Studio Code (VS Code).png";
import Gitlab from "../assets/logos/GitLab.png";

const categorizedSkills = {
  frontend: [
    { icon: <img src={HTML5} alt="HTML5" className="h-12 w-12 object-contain" />, label: "HTML5" },
    { icon: <img src={CSS3} alt="CSS3" className="h-12 w-12 object-contain" />, label: "CSS3" },
    { icon: <img src={Js} alt="JavaScript" className="h-12 w-12 object-contain" />, label: "JavaScript" },
    { icon: <img src={Typescript} alt="TypeScript" className="h-12 w-12 object-contain" />, label: "TypeScript" },
    { icon: <img src={ReactLogo} alt="React" className="h-12 w-12 object-contain" />, label: "React" },
    { icon: <img src={Tailwind} alt="TailwindCss" className="h-12 w-12 object-contain" />, label: "TailwindCss" },
    { icon: <img src={Bootstrap} alt="Bootstrap" className="h-12 w-12 object-contain" />, label: "Bootstrap" },
    { icon: <img src={Angular} alt="Angular" className="h-12 w-12 object-contain" />, label: "Angular" },
  ],
  backend: [
    { icon: <img src={Laravel} alt="Laravel" className="h-12 w-12 object-contain" />, label: "Laravel" },
    { icon: <img src={Php} alt="PHP" className="h-12 w-12 object-contain" />, label: "PHP" },
    { icon: <img src={Cpp} alt="C++" className="h-12 w-12 object-contain" />, label: "C++" },
    { icon: <img src={Python} alt="Python" className="h-12 w-12 object-contain" />, label: "Python" },
    { icon: <img src={Node} alt="Node" className="h-12 w-12 object-contain" />, label: "Node" },
  ],
  databases: [
    { icon: <img src={MySQL} alt="MySQL" className="h-12 w-12 object-contain" />, label: "MySQL" },
    { icon: <img src={MongoDB} alt="MongoDB" className="h-12 w-12 object-contain" />, label: "MongoDB" },
    { icon: <img src={Firebase} alt="Firebase" className="h-12 w-12 object-contain" />, label: "Firebase" },
    { icon: <img src={Redis} alt="Redis" className="h-12 w-12 object-contain" />, label: "Redis" },
  ],
  frameworks: [
    { icon: <img src={ReactLogo} alt="React" className="h-12 w-12 object-contain" />, label: "React" },
    { icon: <img src={Laravel} alt="Laravel" className="h-12 w-12 object-contain" />, label: "Laravel" },
    { icon: <img src={Bootstrap} alt="Bootstrap" className="h-12 w-12 object-contain" />, label: "Bootstrap" },
    { icon: <img src={Angular} alt="Angular" className="h-12 w-12 object-contain" />, label: "Angular" },
  ],
};

const tools = [
  { icon: <img src={Git} alt="Git" className="h-12 w-12 object-contain" />, label: "Git" },
  { icon: <img src={Github} alt="Github" className="h-12 w-12 object-contain" />, label: "Github" },
  { icon: <img src={Vscode} alt="Vscode" className="h-12 w-12 object-contain" />, label: "Vscode" },
  { icon: <img src={NPM} alt="NPM" className="h-12 w-12 object-contain" />, label: "NPM" },
  { icon: <img src={Gitlab} alt="Gitlab" className="h-12 w-12 object-contain" />, label: "Gitlab" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("skills");
  const [activeSubSkill, setActiveSubSkill] = useState("frontend");
  const [selectedItem, setSelectedItem] = useState(categorizedSkills["frontend"][0]);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => setIsSmallDevice(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const donutItems = activeTab === "skills" ? categorizedSkills[activeSubSkill] : tools;
  const radius = isSmallDevice ? 120 : 200;
  const iconSize = isSmallDevice ? 40 : 70;

  // 🎬 GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(leftRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        rightRef.current,
        {
          scale: 0.5,
          rotate: -20,
          opacity: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.7)",
        },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🔁 Auto-rotate center item
  useEffect(() => {
    const items = activeTab === "skills" ? categorizedSkills[activeSubSkill] : tools;
    let i = 0;
    const interval = setInterval(() => {
      setSelectedItem(items[i % items.length]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTab, activeSubSkill]);

  return (
    <section ref={sectionRef} id="skills">
      <div className="relative min-h-screen flex items-center justify-center sm:mx-8 py-16 px-4 text-white overflow-hidden border border-dashed border-neutral-200 dark:border-neutral-700">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start lg:items-center gap-10">
          {/* Left Side */}
          <div ref={leftRef} className="md:w-1/2 text-center md:text-left">
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
              <div className="w-px h-10 bg-gray-400"></div>
              <span className="text-lg tracking-widest uppercase text-gray-400">
                Skills
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-black dark:text-white">
              What My <br /> Programming Skills <br /> Include
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I build simple, intuitive, and responsive interfaces using modern
              stacks. My full-stack expertise includes{" "}
              <strong>React, Laravel, Tailwind, Node.js, and MySQL</strong>,
              blending creativity and performance.
            </p>

            {/* Tabs */}
            <div className="relative inline-flex p-1 m-1 bg-headerbg rounded-full shadow-xl w-max mb-6">
              <div
                className={`absolute h-[calc(100%-0.5rem)] w-24 mx-1 bg-orange rounded-full transition-all duration-300 ease-in-out ${
                  activeTab === "tools" ? "translate-x-full" : "translate-x-0"
                }`}
              ></div>

              <button
                onClick={() =>
                  setActiveTab((prev) => (prev === "skills" ? "tools" : "skills"))
                }
                className={`relative z-10 px-4 py-2 rounded-full font-bold w-24 transition-colors duration-300 ${
                  activeTab === "skills" ? "text-white" : "text-gray-300"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() =>
                  setActiveTab((prev) => (prev === "tools" ? "skills" : "tools"))
                }
                className={`relative z-10 px-4 py-2 rounded-full font-bold w-24 transition-colors duration-300 ${
                  activeTab === "tools" ? "text-white" : "text-gray-300"
                }`}
              >
                Tools
              </button>
            </div>

            {/* Sub Tabs */}
            <AnimatePresence>
              {activeTab === "skills" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {["frontend", "backend", "databases", "frameworks"].map((key) => (
                      <button
                        key={key}
                        onClick={() => setActiveSubSkill(key)}
                        className={`px-4 py-1 rounded-full transition-all duration-400 border ${
                          activeSubSkill === key
                            ? "bg-orange text-white"
                            : "border-gray-800"
                        }`}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side - Donut */}
          <div
            ref={rightRef}
            className="relative w-full h-[min(70vw,70vh)] sm:w-[450px] sm:h-[450px] mx-auto flex items-center justify-center"
          >
            {donutItems.map((item, index) => {
              const angle = (360 / donutItems.length) * index;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              const isSelected = selectedItem.label === item.label;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setSelectedItem(item)}
                  className="absolute cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{
                    top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
                    left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                  }}
                >
                  <div
                    className={`rounded-full p-2 shadow-md ${
                      isSelected ? "ring-2 ring-orange-400" : "bg-headerbg"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>
              );
            })}

            <motion.div
              key={selectedItem.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white dark:bg-zinc-900 drop-shadow-xl shadow-2xl"
            >
              {selectedItem.icon}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
