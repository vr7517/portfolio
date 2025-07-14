import React, { useState, useEffect } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
    const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  // Apply class to <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])
  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    } 
       window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  
  return (
    <header className="bg-headerbg dark:bg-white text-white dark:text-black  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold">Logo</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-orange">Home</a>
          <a href="#about" className="hover:text-orange">About</a>
          <a href="#skills" className="hover:text-orange">Skills</a>
          <a href="#projects" className="hover:text-orange">Projects</a>
          <a href="#contact" className="hover:text-orange">Contact</a>
        </nav>

        {/* Dark Mode Toggle */}
        <div
          onClick={toggleDarkMode}
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 
              ${darkMode ? 'bg-gray-50' : 'bg-orange'}`}
        >
          <div
            className={`dark:bg-orange bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out
                ${darkMode ? 'translate-x-6' : 'translate-x-0' }` }
          ></div>
        </div>

        {/* Hamburger */}
        <button className="md:hidden ml-3" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
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
