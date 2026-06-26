import React, { useEffect, useRef } from "react";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------
   CERTIFICATIONS — sourced from LinkedIn (vivekrajpoot14)
   Ordered data/analytics-first to match the Data Analyst focus.
-------------------------------------------------------------------*/
const certifications = [
  {
    title: "Microsoft Certified Systems Administrator: Data Engineering with Azure",
    issuer: "NetCom Learning",
    date: "Dec 2021",
    credentialId: "",
    skills: ["Azure", "Data Engineering", "ETL"],
    link: "",
  },
  {
    title: "Analyzing and Visualizing Data with Microsoft Power BI",
    issuer: "Curbal",
    date: "Mar 2020",
    credentialId: "",
    skills: ["Power BI", "Data Visualization", "Dashboards"],
    link: "",
  },
  {
    title: "SQL Fundamentals",
    issuer: "Sololearn",
    date: "Sep 2019",
    credentialId: "",
    skills: ["SQL", "Databases", "Queries"],
    link: "",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "OpenEDG",
    date: "May 2024",
    credentialId: "",
    skills: ["Python", "Programming"],
    link: "",
  },
  {
    title: "Java Certification Course",
    issuer: "DataFlair",
    date: "Apr 2024",
    credentialId: "77FDA43316-7A63A12558-7360FF2C81",
    skills: ["Java", "OOP"],
    link: "",
  },
  {
    title: "Programming Essentials in C++",
    issuer: "Cisco Networking Academy",
    date: "May 2024",
    credentialId: "",
    skills: ["C++", "Programming"],
    link: "",
  },
  {
    title: "Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    date: "Dec 2023",
    credentialId: "",
    skills: ["C", "Programming"],
    link: "",
  },
  {
    title: "CCNA 1: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Jun 2024",
    credentialId: "",
    skills: ["Networking", "CCNA"],
    link: "",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Jun 2024",
    credentialId: "",
    skills: ["Cybersecurity", "Security"],
    link: "",
  },
];

export default function Certifications() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // immediateRender:false keeps cards visible if the trigger never fires
      // (the page scrolls inside a nested container, so positions can shift).
      gsap.from(".cert-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    // Recalculate trigger positions after images/fonts settle.
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-4 sm:mx-8 sm:px-6 lg:px-10 text-black overflow-hidden border border-dashed border-gray-200"
    >
      <div className="max-w-6xl w-full mx-auto py-12 sm:py-16">
        {/* Section Label */}
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center md:justify-start">
          <div className="w-6 sm:w-8 h-px bg-black"></div>
          <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-500">
            Certifications
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-3 text-center md:text-left">
          Certifications &amp; credentials
        </h2>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mb-6 sm:mb-10 text-center md:text-left mx-auto md:mx-0">
          Verified training and credentials that back up my analytics and data
          engineering work.
        </p>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {certifications.map((c, i) => (
            <div
              key={i}
              className="cert-card group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-black hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-black text-white transition-transform duration-300 group-hover:scale-105">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <BadgeCheck className="h-5 w-5 text-gray-300 transition-colors duration-300 group-hover:text-black" />
              </div>

              <h3 className="mt-4 text-sm sm:text-base font-bold leading-snug text-black">
                {c.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                {c.issuer}
                {c.date ? ` · ${c.date}` : ""}
              </p>

              {c.credentialId ? (
                <p className="mt-1 text-[10px] sm:text-xs text-gray-400 break-all">
                  ID: {c.credentialId}
                </p>
              ) : null}

              {/* Skills */}
              {c.skills?.length ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-gray-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Link */}
              {c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-black underline-offset-4 hover:underline"
                >
                  View credential
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-400">
                  Credential on request
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
