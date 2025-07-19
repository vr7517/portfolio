import React, { useState, useEffect, useRef } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState("EN")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


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
    <header className="bg-darkbg dark:bg-gray-50 text-white dark:text-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold">Logo</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-orange text-gray-400">Home</a>
          <a href="#about" className="hover:text-orange text-gray-400">About</a>
          <a href="#skills" className="hover:text-orange text-gray-400">Skills</a>
          <a href="#projects" className="hover:text-orange text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-orange text-gray-400">Contact</a>

         
        </nav>

<div className="flex justify-center items-center">
 {/* Language Dropdown */}
          <div className="relative ml-4" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1  px-3 py-1 rounded text-sm  hover:text-gray-700 transition"
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
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
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
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 
              ${darkMode ? 'bg-gray-50' : 'bg-orange'}`}
        >
          <div
            className={`dark:bg-orange bg-gray-50 w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out
                ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
          ></div>
        </div>
</div>
        

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-3" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2">
          <a href="#home" className="block hover:text-orange">Home</a>
          <a href="#about" className="block hover:text-orange">About</a>
          <a href="#skills" className="block hover:text-orange">Skills</a>
          <a href="#projects" className="block hover:text-orange">Projects</a>
          <a href="#contact" className="block hover:text-orange">Contact</a>
        </nav>
      )}
    </header>
  )
}
