import React, { useMemo, useState, useEffect } from "react";
import { FaTimes, FaExternalLinkAlt, FaCode } from "react-icons/fa";

/* ------------------------------------------------------------------
   DATA (add "group" to team projects where appropriate)
-------------------------------------------------------------------*/
const projectsData = [
  {
    id: 1,
    title: "Eduverto",
    date: "Mar 2025 – Present",
    categories: ["web", "group"],
    tech: ["ReactJS", "Laravel", "Tailwind", "MySQL"],
    description:
      "A comprehensive school management system platform handling student data, academic calendar, and teacher management.",
    image: "/eduverto.png",
    live: "https://eduverto.in",
    code: "#",
    logos: [],
  },
  {
    id: 2,
    title: "Sub-G",
    date: "Jan 2025 – Feb 2025",
    categories: ["web", "personal"],
    tech: ["Laravel", "Livewire", "Tailwind", "MySQL"],
    description:
      "A personal project for school challenges and competition management, enabling participation tracking and leaderboards.",
    image: "/sub-g.png",
    live: "https://green.mavask.in",
    code: "#",
    logos: [],
  },
  {
    id: 3,
    title: "YashHair",
    date: "Apr 2025 – May 2025",
    categories: ["web", "personal"],
    tech: ["Laravel", "Tailwind", "Stripe API", "PHP"],
    description:
      "E-commerce platform for hair replacement and wig services including mens, womens wigs, and hair patching solutions.",
    image: "/yash-hair.png",
    live: "https://yashhairpatchjabalpur.com",
    code: "#",
    logos: [],
  },
  {
    id: 4,
    title: "Smart Hair Beauty",
    date: "Apr 2025 – Present",
    categories: ["web", "personal"],
    tech: ["Laravel", "Tailwind", "Stripe API", "Livewire"],
    description:
      "Focused on advanced hair replacement services with online booking, product showcase, and management of wigs and hair systems.",
    image: "/smart-hair.png",
    live: "https://smarthairsbeauty.com",
    code: "#",
    logos: [],
  },
];


/* ------------------------------------------------------------------
   FILTERS (requested)
-------------------------------------------------------------------*/
const categoryFilters = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Development" },
  { key: "app", label: "App Development" },
  { key: "personal", label: "Personal" },
  { key: "group", label: "Group" },
];

/* Hash parser: #projects?cat=web, etc. */
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
      className="group text-left w-full  rounded-xl overflow-hidden shadow
                 hover:shadow-xl hover:scale-[1.02] transition transform border border-gray-300 dark:border-gray-800 hover:border-[#f97316]"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-48 object-cover rounded-xl p-1"
          loading="lazy"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center bg-black/60 text-[#f97316] text-sm font-medium">
          View Details
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-200">
          {project.title}
        </h3>
        <p className="text-xs mt-1 text-gray-400 dark:text-gray-600">{project.date}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] rounded-full bg-[#388BFD1A] text-[#4493F8]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-gray-700 text-gray-300 dark:bg-gray-300 dark:text-gray-700">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------
   MODAL
-------------------------------------------------------------------*/
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg bg-gray-900 dark:bg-white rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-black text-xl"
          aria-label="Close project details"
        >
          <FaTimes />
        </button>

        <div className="w-full h-56 bg-gray-800 dark:bg-gray-100 overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : null}
        </div>

        {project.logos?.length ? (
          <div className="flex items-center justify-center gap-4 px-6 -mt-10 mb-4 relative z-20">
            {project.logos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-10 w-auto rounded bg-white p-1 shadow dark:bg-gray-100"
              />
            ))}
          </div>
        ) : null}

        <div className="px-6 pb-8 pt-2 text-white dark:text-gray-900">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-sm mt-1 text-gray-400 dark:text-gray-600">{project.date}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium text-white bg-[#f97316]"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-[#4493F8] leading-relaxed">{project.description}</p>

          <div className="mt-8 flex gap-4">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-sm font-medium dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300"
            >
              <FaCode className="text-xs" />
              View Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#238636] hover:bg-[#f97316]/80 text-sm font-medium text-white"
            >
              <FaExternalLinkAlt className="text-xs" />
              View Live App
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

  // Sync from #projects?cat=web, etc.
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
    // TEMP fallback: include "portfolio" when filtering group
    if (activeCat === "group") {
      return projectsData.filter(
        (p) => p.categories.includes("group") || p.categories.includes("portfolio")
      );
    }
    return projectsData.filter((p) => p.categories.includes(activeCat));
  }, [activeCat]);

  return (
    <section
      id="projects"
      className="py-24  text-white dark:text-black"
    >
      <div className="w-11/12 max-w-6xl mx-auto">
  {/* Section Label */}
  <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
    <div className="w-px h-10 bg-gray-400"></div>
    <span className="text-lg tracking-widest uppercase text-gray-400">Projects</span>
  </div>

  {/* Description */}
  <p className="text-gray-300 leading-relaxed max-w-xl mb-10 text-center md:text-left">
    You can find all of my projects on my GitHub profile. <br /> 
    View my activities, contributions, and code for each project.
  </p>

  {/* Category Pills */}
  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
    {categoryFilters.map((c) => {
      const isActive = activeCat === c.key;
      return (
        <button
          key={c.key}
          onClick={() => setActiveCat(c.key)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition
            ${
              isActive
                ? "bg-orange text-white"
                : "bg-gray-100 text-gray-600 hover:bg-orange hover:text-white dark:bg-gray-100 dark:text-gray-700 dark:hover:bg-orange dark:hover:text-white border border-gray-400"
            }`}
        >
          {c.label}
        </button>
      );
    })}
  </div>

  {/* Projects Grid */}
  {filteredProjects.length === 0 ? (
    <p className="text-center text-gray-400 dark:text-gray-600">No projects found.</p>
  ) : (
    <div className="max-h-[670px] overflow-y-auto scrollbar-hide px-2 pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setModalProject} />
        ))}
      </div>
    </div>
  )}
</div>


      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </section>
  );
}
