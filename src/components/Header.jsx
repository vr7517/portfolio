import React, { useState, useEffect } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = ['home', 'about', 'skills', 'projects', 'certifications', 'contact']

  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Force light mode only — ensure the legacy `dark` class is never applied
  useEffect(() => {
    document.documentElement.classList.remove("dark")
  }, [])

  // Hide on scroll down, show on scroll up + track active section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      setLastScrollY(currentScrollY)

      // Active link highlighting
      const offset = window.innerHeight * 0.35
      let current = "home"
      navItems.forEach((item) => {
        const el = document.getElementById(item)
        if (el && el.getBoundingClientRect().top <= offset) {
          current = item
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`bg-white/90 backdrop-blur-md font-sans sticky top-0 z-50 transition-transform duration-300
       border-b border-gray-200
      ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-black text-white text-sm font-extrabold tracking-tight shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
            VR
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-black">
              Vivek<span className="text-gray-400">.</span>
            </span>
            <span className="block text-[9px] font-medium uppercase tracking-[0.28em] text-gray-400">
              Data Analyst
            </span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 lg:space-x-7 items-center text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative transition-colors duration-300 hover:text-black
                ${activeSection === item ? 'text-black' : 'text-gray-500'}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-black transition-all duration-300
                  ${activeSection === item ? 'w-full' : 'w-0'}`}
              />
            </a>
          ))}
        </nav>

        {/* CTA + mobile button */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-full border border-black px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-5 pb-4 pt-1 space-y-1 bg-white border-t border-gray-100 text-black">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-600 hover:text-black transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center rounded-full border border-black px-5 py-2 text-sm font-semibold text-black"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  )
}
