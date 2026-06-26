import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";
import {
  BarChart3,
  LayoutDashboard,
  Code2,
  Target,
  Lightbulb,
  TrendingUp,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------
   DATA
   - Existing web projects are preserved.
   - Highlighted Data Analytics / Dashboard projects added on top.
   - Each project follows: Problem → Solution → Impact + a headline metric.
-------------------------------------------------------------------*/
const projectsData = [
  {
    id: 101,
    title: "Sales & Finance Fabric Project",
    date: "2025",
    tag: "Data Analytics",
    categories: ["analytics", "dashboard"],
    tools: ["Microsoft Fabric", "Power BI", "SQL", "DAX"],
    metric: "Manual reporting ↓ 60%",
    problem:
      "Finance and sales data lived in separate systems, forcing the team to manually consolidate spreadsheets every month before any analysis could begin.",
    solution:
      "Built an end-to-end Microsoft Fabric lakehouse with a unified Power BI semantic model, joining sales and finance into a single, governed source of truth with automated refresh.",
    impact:
      "Reduced manual reporting effort by ~60% and gave leadership real-time visibility into margins and month-end performance.",
    image: null,
    live: "#",
    code: "#",
  },
  {
    id: 102,
    title: "Logistics Reporting Tool",
    date: "2024 – 2025",
    tag: "Dashboard",
    categories: ["dashboard", "analytics"],
    tools: ["Power BI", "SQL", "Power Query", "Excel"],
    metric: "Report prep time ↓ 90%",
    problem:
      "Logistics KPIs were scattered across dozens of spreadsheets, making on-time delivery and cost tracking slow and error-prone.",
    solution:
      "Designed a centralized Power BI reporting tool with automated data refresh, drill-through pages, and clear delivery/cost KPIs for operations.",
    impact:
      "Cut report preparation from days to minutes and improved on-time delivery monitoring across the logistics team.",
    image: null,
    live: "#",
    code: "#",
  },
  {
    id: 103,
    title: "School Dashboard (Mavask)",
    date: "2024 – 2025",
    tag: "Dashboard",
    categories: ["dashboard", "analytics", "web"],
    tools: ["Power BI", "SQL", "Laravel", "MySQL"],
    metric: "1,000+ students tracked",
    problem:
      "School administrators had no single view of attendance, academic performance, and fee collection — decisions relied on manual record-keeping.",
    solution:
      "Built an interactive dashboard consolidating student metrics with role-based views, surfacing attendance, results, and fee status in one place.",
    impact:
      "Enabled data-driven decisions for 1,000+ students and made attendance and fee tracking dramatically faster for staff.",
    image: null,
    live: "https://green.mavask.in",
    code: "#",
  },
  {
    id: 1,
    title: "Eduverto",
    date: "Mar 2025 – Present",
    tag: "Web",
    categories: ["web"],
    tools: ["ReactJS", "Laravel", "Tailwind", "MySQL"],
    metric: "Multi-school admin platform",
    problem:
      "Schools needed a unified platform to manage student data, academic calendars, and teacher workflows without juggling multiple tools.",
    solution:
      "Developed a comprehensive school management system handling student records, scheduling, and staff management with a clean, responsive UI.",
    impact:
      "Streamlined day-to-day administration and centralized academic data for school staff.",
    image: "/eduverto.png",
    live: "https://eduverto.in",
    code: "#",
  },
  {
    id: 2,
    title: "Sub-G",
    date: "Jan 2025 – Feb 2025",
    tag: "Web",
    categories: ["web"],
    tools: ["Laravel", "Livewire", "Tailwind", "MySQL"],
    metric: "Real-time leaderboards",
    problem:
      "Schools running competitions had no easy way to manage participation and track results across challenges.",
    solution:
      "Built a challenge and competition management platform with participation tracking and live leaderboards.",
    impact:
      "Simplified competition management and made standings instantly visible to participants.",
    image: "/sub-g.png",
    live: "https://green.mavask.in",
    code: "#",
  },
  {
    id: 3,
    title: "YashHair",
    date: "Apr 2025 – May 2025",
    tag: "Web",
    categories: ["web"],
    tools: ["Laravel", "Tailwind", "Stripe API", "PHP"],
    metric: "End-to-end e-commerce",
    problem:
      "A hair-replacement business needed an online presence to showcase services and accept orders for wigs and hair systems.",
    solution:
      "Created an e-commerce platform for wigs and hair-patching solutions with product catalog and secure Stripe payments.",
    impact:
      "Gave the business a professional online storefront and a streamlined ordering flow.",
    image: "/yash-hair.png",
    live: "https://yashhairpatchjabalpur.com",
    code: "#",
  },
  {
    id: 4,
    title: "Smart Hair Beauty",
    date: "Apr 2025 – Present",
    tag: "Web",
    categories: ["web"],
    tools: ["Laravel", "Tailwind", "Stripe API", "Livewire"],
    metric: "Online booking & catalog",
    problem:
      "An advanced hair-replacement service needed online booking and a product showcase to reduce phone-based scheduling.",
    solution:
      "Built a site with online booking, a product showcase, and management of wigs and hair systems.",
    impact:
      "Reduced manual scheduling and presented services professionally to new clients.",
    image: "/smart-hair.png",
    live: "https://smarthairsbeauty.com",
    code: "#",
  },
];

/* ------------------------------------------------------------------
   FILTERS — requested category tags
-------------------------------------------------------------------*/
const categoryFilters = [
  { key: "all", label: "All" },
  { key: "analytics", label: "Data Analytics" },
  { key: "dashboard", label: "Dashboard" },
  { key: "web", label: "Web" },
];

const tagIcon = (tag) => {
  switch (tag) {
    case "Data Analytics":
      return <BarChart3 className="h-4 w-4" />;
    case "Dashboard":
      return <LayoutDashboard className="h-4 w-4" />;
    default:
      return <Code2 className="h-4 w-4" />;
  }
};

const placeholderIcon = (tag) => {
  const cls = "h-14 w-14 text-white/90";
  switch (tag) {
    case "Data Analytics":
      return <BarChart3 className={cls} />;
    case "Dashboard":
      return <LayoutDashboard className={cls} />;
    default:
      return <Code2 className={cls} />;
  }
};

/* Hash parser: #projects?cat=analytics, etc. */
const getHashCategory = () => {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash;
  const idx = hash.indexOf("?cat=");
  if (idx === -1) return null;
  return decodeURIComponent(hash.slice(idx + 5)).toLowerCase();
};

/* ------------------------------------------------------------------
   CARD
-------------------------------------------------------------------*/
function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="project-card group relative flex h-[340px] sm:h-[500px] w-[64vw] max-w-[240px] sm:w-[340px] sm:max-w-none shrink-0 flex-col justify-end overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 text-left shadow-sm
                 transition-all duration-500 active:scale-[0.98] hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Media (kept in full colour) / placeholder for data projects */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black">
          {placeholderIcon(project.tag)}
        </div>
      )}

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5 transition-all duration-500 group-hover:from-black" />

      {/* Category tag */}
      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/90 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-semibold text-black backdrop-blur">
        {tagIcon(project.tag)}
        {project.tag}
      </span>

      {/* Arrow CTA */}
      <span className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-6 text-white">
        <div className="mb-2 sm:mb-3 inline-flex items-center gap-1 sm:gap-1.5 rounded-md bg-white/15 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-semibold backdrop-blur">
          <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          {project.metric}
        </div>

        <h3 className="text-lg sm:text-2xl font-bold leading-tight">{project.title}</h3>
        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-white/60">{project.date}</p>

        {/* Description — always visible on mobile, revealed on hover on desktop */}
        <div className="mt-2 sm:mt-0 grid grid-rows-[1fr] opacity-100 transition-all duration-500 ease-out sm:grid-rows-[0fr] sm:opacity-0 sm:group-hover:mt-3 sm:group-hover:grid-rows-[1fr] sm:group-hover:opacity-100">
          <p className="overflow-hidden text-[11px] sm:text-sm leading-relaxed text-white/80 line-clamp-2 sm:line-clamp-3">
            {project.solution}
          </p>
        </div>

        {/* Tools */}
        <div className="mt-2.5 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
          {project.tools.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/30 bg-white/5 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-white/90 backdrop-blur"
            >
              {t}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="rounded-full bg-white px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-black">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------
   MODAL — structured case study
-------------------------------------------------------------------*/
function Block({ icon, label, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
        {icon}
        {label}
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-700">{children}</p>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="animate-fade-in relative z-10 w-full max-w-lg max-h-full overflow-y-auto scrollbar-hide rounded-2xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 rounded-full bg-white/90 p-2 text-gray-500 transition hover:text-black"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {/* Header media */}
        <div className="relative h-48 overflow-hidden bg-gray-900">
          {project.image ? (
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-black">
              {placeholderIcon(project.tag)}
            </div>
          )}
          <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-black">
            {tagIcon(project.tag)}
            {project.tag}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-black">{project.title}</h3>
          <p className="mt-1 text-sm text-gray-400">{project.date}</p>

          {/* Headline metric */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white">
            <TrendingUp className="h-4 w-4" />
            {project.metric}
          </div>

          {/* Tools */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Structured story */}
          <div className="mt-6 space-y-5">
            <Block icon={<Target className="h-4 w-4" />} label="Problem">
              {project.problem}
            </Block>
            <Block icon={<Lightbulb className="h-4 w-4" />} label="Solution">
              {project.solution}
            </Block>
            <Block icon={<TrendingUp className="h-4 w-4" />} label="Impact">
              {project.impact}
            </Block>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-3">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-gray-50"
            >
              <FaCode className="text-xs" />
              View Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              <FaExternalLinkAlt className="text-xs" />
              View Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   MAIN
-------------------------------------------------------------------*/
export default function Project() {
  const [activeCat, setActiveCat] = useState("all");
  const [modalProject, setModalProject] = useState(null);

  // Sync from #projects?cat=analytics, etc.
  useEffect(() => {
    const applyHash = () => {
      const hashCat = getHashCategory();
      if (hashCat && categoryFilters.some((c) => c.key === hashCat)) {
        setActiveCat(hashCat);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCat === "all") return projectsData;
    return projectsData.filter((p) => p.categories.includes(activeCat));
  }, [activeCat]);

  // Duplicate the list so the row can loop seamlessly.
  const loopProjects = [...filteredProjects, ...filteredProjects];

  const rowRef = useRef(null);
  const pausedRef = useRef(false);

  // JS-driven auto-scroll (lets us also support buttons + drag/touch).
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf;
    const step = () => {
      if (!pausedRef.current) {
        el.scrollLeft += 0.7;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [filteredProjects]);

  const scrollByCards = (dir) => {
    const el = rowRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    // allow looping backwards past the start
    if (dir < 0 && el.scrollLeft < 360) el.scrollLeft += half;
    el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen px-4 sm:mx-8 sm:px-6 lg:px-10 text-black overflow-hidden border border-dashed border-gray-200"
    >
      <div className="max-w-6xl mx-auto py-12 sm:py-16">
        {/* Section Label */}
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center md:justify-start">
          <div className="w-6 sm:w-8 h-px bg-black"></div>
          <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-500">
            Projects
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-3 text-center md:text-left">
          Selected work &amp; case studies
        </h2>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mb-6 sm:mb-10 text-center md:text-left mx-auto md:mx-0">
          From Microsoft Fabric pipelines and Power BI dashboards to full-stack web apps —
          each project pairs a real problem with a measurable outcome.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-6 sm:mb-10">
          {categoryFilters.map((c) => {
            const isActive = activeCat === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActiveCat(c.key)}
                className={`rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 border
                  ${
                    isActive
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-600 border-gray-300 hover:border-black hover:text-black"
                  }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Auto-scrolling single row (full-bleed, pauses on hover) */}
      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-400 pb-16">No projects found.</p>
      ) : (
        <div
          className="relative w-full pb-12"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
        >
          {/* prev / next — light glassmorphic buttons (desktop / tablet only) */}
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Scroll left"
            className="absolute left-6 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/30 text-black shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/60 hover:scale-110 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Scroll right"
            className="absolute right-6 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/30 text-black shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/60 hover:scale-110 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* scroll track */}
          <div
            ref={rowRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 py-2"
          >
            {loopProjects.map((p, i) => (
              <ProjectCard
                key={`${p.id}-${i}`}
                project={p}
                onOpen={setModalProject}
              />
            ))}
          </div>

          {/* glassmorphic hint pill */}
          <div className="mt-6 flex justify-center px-4">
            <p className="rounded-full border border-white/50 bg-white/30 px-5 py-2 text-center text-xs text-gray-600 shadow-sm backdrop-blur-md">
              <span className="hidden sm:inline">Hover to pause · use arrows or drag · </span>
              <span className="sm:hidden">Swipe to explore · </span>
              tap a card for the full case study
            </p>
          </div>
        </div>
      )}

      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </section>
  );
}
