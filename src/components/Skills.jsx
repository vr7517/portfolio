import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import {
  BarChart3,
  PieChart,
  Gauge,
  TrendingUp,
  FileSpreadsheet,
  FunctionSquare,
  Database,
  Boxes,
  Network,
  Workflow,
  Server,
  Filter,
  Braces,
  Table2,
  GitBranch,
  Github,
  Terminal,
  BookOpen,
  Atom,
  Layers,
  Palette,
  Globe,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ICON = "h-9 w-9 sm:h-11 sm:w-11 text-black";

// Four divisions requested: Data Analytics (primary) → Web Development (secondary)
const categories = {
  analytics: {
    label: "Data Analytics",
    tag: "Primary",
    blurb:
      "Designing dashboards and reports that turn raw numbers into clear, decision-ready stories.",
    items: [
      { icon: <BarChart3 className={ICON} />, label: "Power BI" },
      { icon: <FunctionSquare className={ICON} />, label: "DAX" },
      { icon: <Gauge className={ICON} />, label: "Dashboards" },
      { icon: <PieChart className={ICON} />, label: "Data Viz" },
      { icon: <FileSpreadsheet className={ICON} />, label: "Excel" },
      { icon: <TrendingUp className={ICON} />, label: "KPI Reporting" },
    ],
  },
  engineering: {
    label: "Data Engineering",
    tag: "Core",
    blurb:
      "Building reliable pipelines and data models that feed clean, trusted data into analytics.",
    items: [
      { icon: <Database className={ICON} />, label: "SQL" },
      { icon: <Boxes className={ICON} />, label: "MS Fabric" },
      { icon: <Network className={ICON} />, label: "Data Modeling" },
      { icon: <Workflow className={ICON} />, label: "ETL Pipelines" },
      { icon: <Server className={ICON} />, label: "Data Warehouse" },
      { icon: <Filter className={ICON} />, label: "Power Query" },
    ],
  },
  tools: {
    label: "Tools & Tech",
    tag: "Daily",
    blurb:
      "The languages and tooling I use to automate, explore, and version everything I ship.",
    items: [
      { icon: <Braces className={ICON} />, label: "Python" },
      { icon: <Table2 className={ICON} />, label: "Pandas" },
      { icon: <BookOpen className={ICON} />, label: "Jupyter" },
      { icon: <GitBranch className={ICON} />, label: "Git" },
      { icon: <Github className={ICON} />, label: "GitHub" },
      { icon: <Terminal className={ICON} />, label: "VS Code" },
    ],
  },
  web: {
    label: "Web Development",
    tag: "Secondary",
    blurb:
      "A supporting skill set for building data-driven tools and internal applications.",
    items: [
      { icon: <Atom className={ICON} />, label: "React" },
      { icon: <Layers className={ICON} />, label: "Laravel" },
      { icon: <Palette className={ICON} />, label: "Tailwind" },
      { icon: <Braces className={ICON} />, label: "JavaScript" },
      { icon: <Database className={ICON} />, label: "MySQL" },
      { icon: <Globe className={ICON} />, label: "REST APIs" },
    ],
  },
};

const categoryKeys = Object.keys(categories);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("analytics");
  const [selectedItem, setSelectedItem] = useState(categories.analytics.items[0]);
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

  const current = categories[activeCategory];
  const donutItems = current.items;
  const radius = isSmallDevice ? 110 : 185;
  const iconSize = isSmallDevice ? 44 : 64;

  // Reset selected item when category changes
  useEffect(() => {
    setSelectedItem(categories[activeCategory].items[0]);
  }, [activeCategory]);

  // Entrance animations
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
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      }).from(
        rightRef.current,
        {
          scale: 0.6,
          opacity: 0,
          duration: 1,
          ease: "elastic.out(1, 0.75)",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate center item
  useEffect(() => {
    const items = categories[activeCategory].items;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % items.length;
      setSelectedItem(items[i]);
    }, 2600);
    return () => clearInterval(interval);
  }, [activeCategory]);

  return (
    <section ref={sectionRef} id="skills">
      <div className="relative min-h-screen flex items-center justify-center sm:mx-8 py-16 px-4 text-black overflow-hidden border border-dashed border-gray-200">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start lg:items-center gap-12">
          {/* Left Side */}
          <div ref={leftRef} className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
              <div className="w-8 h-px bg-black"></div>
              <span className="text-xs tracking-[0.25em] uppercase text-gray-500">
                Skills
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 tracking-tight text-black">
              A data-first <br /> skill set
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              {current.blurb}
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {categoryKeys.map((key) => {
                const isActive = activeCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300
                      ${
                        isActive
                          ? "border-black bg-black text-white"
                          : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                      }`}
                  >
                    {categories[key].label}
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide
                        ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}
                    >
                      {categories[key].tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Skill chips list (accessible text fallback + quick scan) */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              {donutItems.map((item) => (
                <span
                  key={item.label}
                  onMouseEnter={() => setSelectedItem(item)}
                  className={`cursor-default rounded-md border px-3 py-1 text-xs font-medium transition-colors duration-300
                    ${
                      selectedItem.label === item.label
                        ? "border-black bg-black text-white"
                        : "border-gray-200 text-gray-600 hover:border-gray-400"
                    }`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Donut */}
          <div
            ref={rightRef}
            className="relative w-full h-[min(80vw,80vh)] sm:w-[440px] sm:h-[440px] mx-auto flex items-center justify-center"
          >
            {/* faint guide ring */}
            <div
              className="absolute rounded-full border border-dashed border-gray-200"
              style={{ width: radius * 2, height: radius * 2 }}
              aria-hidden
            />

            {donutItems.map((item, index) => {
              const angle = (360 / donutItems.length) * index - 90;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              const isSelected = selectedItem.label === item.label;

              return (
                <div
                  key={item.label}
                  onMouseEnter={() => setSelectedItem(item)}
                  className="absolute cursor-pointer transition-transform duration-300 hover:scale-110"
                  style={{
                    top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
                    left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                  }}
                >
                  <div
                    className={`flex items-center justify-center rounded-full border bg-white p-3 shadow-sm transition-all duration-300
                      ${isSelected ? "border-black ring-2 ring-black scale-110" : "border-gray-200"}`}
                  >
                    {item.icon}
                  </div>
                </div>
              );
            })}

            <motion.div
              key={selectedItem.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-2 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-black text-white shadow-xl"
            >
              {React.cloneElement(selectedItem.icon, {
                className: "h-8 w-8 sm:h-10 sm:w-10 text-white",
              })}
              <span className="text-xs sm:text-sm font-semibold">{selectedItem.label}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
