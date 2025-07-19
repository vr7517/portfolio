import React, { useState,useEffect } from "react";
import HTML5 from "../assets/logos/HTML5.png"
import CSS3 from "../assets/logos/CSS3.png"
import Angular from "../assets/logos/Angular.png"
import Bootstrap from "../assets/logos/Bootstrap.png"
import Cpp from "../assets/logos/C++ (CPlusPlus).png"
import Flutter from "../assets/logos/Flutter.png"
import Js from "../assets/logos/JavaScript-logo.png"
import Laravel from "../assets/logos/Laravel.png"
import Tailwind from "../assets/logos/Tailwind CSS.png"
import Php from "../assets/logos/PHP.png"
import Python from "../assets/logos/Python.png"
import react from "../assets/logos/React.png"
import Typescript from "../assets/logos/TypeScript.png"
import Node from "../assets/logos/Node.js.png"
import Sass from "../assets/logos/Sass.png"
import Firebase from "../assets/logos/Firebase.png"
import Git from "../assets/logos/Git.png"
import Github from "../assets/logos/GitHub.png"
import MongoDB from "../assets/logos/MongoDB.png"
import MySQL from "../assets/logos/MySQL.png"
import NPM from "../assets/logos/NPM.png"
import Phpstorm from "../assets/logos/PhpStorm.png"
import Redis from "../assets/logos/Redis.png"
import Vscode from "../assets/logos/Visual Studio Code (VS Code).png"
import Gitlab from "../assets/logos/GitLab.png"
import { motion, AnimatePresence } from "motion/react"


// const skills = [
//   { icon: <img src={HTML5} alt="HTML5" className="h-12 w-12 object-contain" />, label: "HTML5" },
//   { icon: <img src={CSS3} alt="CSS3" className="h-12 w-12 object-contain" />, label: "CSS3" },
//   { icon: <img src={Js} alt="JavaScript" className="h-12 w-12 object-contain" />, label: "JavaScript" },
//   { icon: <img src={Typescript} alt="TypeScript" className="h-12 w-12 object-contain" />, label: "TypeScript" },
//   { icon: <img src={react} alt="react" className="h-12 w-12 object-contain" />, label: "React" },
//   { icon: <img src={Bootstrap} alt="Bootstrap" className="h-12 w-12 object-contain" />, label: "Bootstrap" },
//   { icon: <img src={Angular} alt="Angular" className="h-12 w-12 object-contain" />, label: "Angular" },
//   // { icon: <img src={Flutter} alt="Flutter" className="h-12 w-12 object-contain" />, label: "Flutter" },
//   { icon: <img src={Laravel} alt="Laravel" className="h-12 w-12 object-contain" />, label: "Laravel" },
//   { icon: <img src={Tailwind} alt="TailwindCss" className="h-12 w-12 object-contain" />, label: "TailwindCss" },
//   // { icon: <img src={Sass} alt="Sass" className="h-12 w-12 object-contain" />, label: "Sass" },
//   { icon: <img src={Php} alt="PHP" className="h-12 w-12 object-contain" />, label: "PHP" },
//   { icon: <img src={Python} alt="Python" className="h-12 w-12 object-contain" />, label: "Python" },
//   { icon: <img src={Node} alt="Node" className="h-12 w-12 object-contain" />, label: "Node" },
// ];

const categorizedSkills = {
  frontend: [
    { icon: <img src={HTML5} alt="HTML5" className="h-12 w-12 object-contain" />, label: "HTML5" },
    { icon: <img src={CSS3} alt="CSS3" className="h-12 w-12 object-contain" />, label: "CSS3" },
    { icon: <img src={Js} alt="JavaScript" className="h-12 w-12 object-contain" />, label: "JavaScript" },
    { icon: <img src={Typescript} alt="TypeScript" className="h-12 w-12 object-contain" />, label: "TypeScript" },
    { icon: <img src={react} alt="React" className="h-12 w-12 object-contain" />, label: "React" },
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
    { icon: <img src={react} alt="React" className="h-12 w-12 object-contain" />, label: "React" },
    { icon: <img src={Laravel} alt="Laravel" className="h-12 w-12 object-contain" />, label: "Laravel" },
    { icon: <img src={Bootstrap} alt="Bootstrap" className="h-12 w-12 object-contain" />, label: "Bootstrap" },
    { icon: <img src={Angular} alt="Angular" className="h-12 w-12 object-contain" />, label: "Angular" },
  ],
};


const tools = [
  { icon: <img src={Firebase} alt="Firebase" className="h-12 w-12 object-contain" />, label: "Firebase" },
  { icon: <img src={Git} alt="Git" className="h-12 w-12 object-contain" />, label: "Git" },
  { icon: <img src={Github} alt="Github" className="h-12 w-12 object-contain" />, label: "Github" },
  { icon: <img src={MongoDB} alt="MongoDB" className="h-12 w-12 object-contain" />, label: "MongoDB" },
  { icon: <img src={MySQL} alt="MySQL" className="h-12 w-12 object-contain" />, label: "MySQL" },
  { icon: <img src={NPM} alt="NPM" className="h-12 w-12 object-contain" />, label: "NPM" },
  { icon: <img src={Phpstorm} alt="Phpstorm" className="h-12 w-12 object-contain" />, label: "Phpstorm" },
  { icon: <img src={Redis} alt="Redis" className="h-12 w-12 object-contain" />, label: "Redis" },
  { icon: <img src={Vscode} alt="VsCode" className="h-12 w-12 object-contain" />, label: "VsCode" },
  { icon: <img src={Gitlab} alt="Gitlab" className="h-12 w-12 object-contain" />, label: "Gitlab" },
  
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("skills");
  const [activeSubSkill, setActiveSubSkill] = useState("frontend");

  const [selectedItem, setSelectedItem] = useState(categorizedSkills["frontend"][0]);
// default to first skill

  // 👉 Immediately update center icon when tab changes
  useEffect(() => {
    const newItems = activeTab === "skills" ? categorizedSkills[activeSubSkill] : tools;
    setSelectedItem(newItems[0]);
  }, [activeTab, activeSubSkill]);

  // 🔁 Auto-rotate center icon every 3s
  useEffect(() => {
    const items = activeTab === "skills" ? categorizedSkills[activeSubSkill] : tools;
    let currentIndex = items.findIndex((item) => item.label === selectedItem.label);
    if (currentIndex === -1) currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      setSelectedItem(items[currentIndex]);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [activeTab, activeSubSkill]); // ✅ DO NOT include selectedItem


  // const donutItems = activeTab === "skills" ? skills : tools;
  const donutItems = activeTab === "skills"
    ? categorizedSkills[activeSubSkill]
    : tools;

  const radius = 200;
  const iconSize = 70;


  return (
    <div className=" text-white py-12 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <div className="text-sm uppercase tracking-widest text-gray-400 mb-2 rotate-[-90deg] md:rotate-0 md:mb-4">
            My Skills
          </div>
          <h2 className="text-4xl md:text-4xl dark:text-black font-bold mb-4 leading-snug">
            What My <br /> Programming Skills <br /> Included?
          </h2>
          <p className="text-gray-400 dark:text-gray-700 text-2xl mb-6">
            I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.
          </p>

          <div className="relative inline-flex p-1 m-1 bg-headerbg rounded-full shadow-xl w-max">
            {/* Sliding background pill */}
            <div
              className={`absolute h-[calc(100%-0.5rem)] w-24 mx-1 bg-orange rounded-full transition-all duration-300 ease-in-out ${activeTab === "tools" ? "translate-x-full" : "translate-x-0"
                }`}
            ></div>

            {/* Tab Buttons */}
            <button
              onClick={() =>
                setActiveTab((prev) => (prev === "skills" ? "tools" : "skills"))
              }
              className={`relative z-10 px-2 py-2 rounded-full font-bold w-24 transition-colors duration-300 ${activeTab === "skills" ? "text-white" : "text-gray-300"
                }`}
            >
              Skills
            </button>
            <button
              onClick={() =>
                setActiveTab((prev) => (prev === "tools" ? "skills" : "tools"))
              }
              className={`relative z-10 px-2 py-2 rounded-full font-bold w-24 transition-colors duration-300 ${activeTab === "tools" ? "text-white" : "text-gray-300"
                }`}
            >
              Tools
            </button>
          </div>
          <AnimatePresence>
            {activeTab === "skills" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-4"
              >
                <div className="flex flex-wrap gap-3 text-sm font-semibold text-white">
                  {["frontend", "backend", "databases", "frameworks"].map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveSubSkill(key)}
                      className={`px-4 py-1 text-lg rounded-full transition-all duration-400 font-semibold border ${activeSubSkill === key ? "bg-orange text-white" : "border-gray-500"
                        }`}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right Content */}
        {/* Right Content */}
        <div className="relative w-[min(100vw,100vh)] h-[min(80vw,80vh)] mx-auto flex items-center justify-center">
          {/* Donut Ring Icons */}
          {donutItems.map((item, index) => {
            const angle = (360 / donutItems.length) * index;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const isSelected = selectedItem.label === item.label;

            return (
              <div
                key={index}
                onMouseEnter={() => setSelectedItem(item)}
                className={`absolute cursor-pointer transition-all duration-300 ease-in-out hover:scale-110`}
                style={{
                  top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
                  left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                }}
              >
                <div className={`rounded-full p-2 shadow-md ${isSelected ? "ring-2 ring-orange-400" : "bg-headerbg"}`}>
                  {item.icon}
                </div>
              </div>
            );
          })}

          {/* Center Display */}
          <motion.div
            key={selectedItem.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white drop-shadow-lg shadow-2xl dark:bg-zinc-900 transition-all"
          >
            <div className="text-6xl  text-blue-600 dark:text-white">
              {selectedItem.icon}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
