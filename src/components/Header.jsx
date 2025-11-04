import React, { useState, useEffect, useRef } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [language, setLanguage] = useState("EN")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Handle scroll hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowHeader(false) // hide on scroll down
      } else {
        setShowHeader(true) // show on scroll up
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className={`bg-[#EFEFE6] dark:bg-black font-jetbrains sticky top-0 z-50 transition-transform duration-300
       border border-neutral-200 dark:border-neutral-700 sm:mx-12
      ${showHeader ? 'translate-y-0' : '-translate-y-full'}` }>
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="font-[font-2] uppercase text-3xl font-extrabold  tracking-widest text-black dark:text-white"><span className="text-orange-600">V</span>iv</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <a key={item}
              href={`#${item}`}
              className="text-gray-700 dark:text-gray-300 hover:text-orange dark:hover:text-orange transition">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        <div className="flex justify-center items-center">
          {/* Language Dropdown */}
          <div className="relative ml-4" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 px-3 py-1 rounded text-sm text-black dark:text-white hover:text-orange"
            >
              {language} ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black border rounded shadow-lg z-20">
                {["EN", "HI", "FR"].map((lang) => (
                  <div
                    key={lang}
                    onClick={() => {
                      setLanguage(lang)
                      setDropdownOpen(false)
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {lang === "EN" && "English"}
                    {lang === "HI" && "हिन्दी"}
                    {lang === "FR" && "Français"}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <div
            onClick={toggleDarkMode}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 bg-black dark:bg-white
              ${darkMode ? 'bg-white' : 'bg-orange'}`}
          >
            <div
              className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out bg-orange-500
                ${darkMode ? 'translate-x-6 bg-orange' : 'translate-x-0 bg-orange-600'}`}
            ></div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-3 text-black dark:text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-black text-black dark:text-white">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <a key={item}
              href={`#${item}`}
              className="block hover:text-orange dark:hover:text-orange">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
