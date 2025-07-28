import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'

import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from "./components/Contact";


function App() {
 return (
  <>
  
    <Header />
    <div className="min-h-screen flex flex-col bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 from-white to-white text-black dark:text-white transition-all duration-300 font-jetbrains-mono">
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-16 scrollbar-hide">
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact/>

          {/* Contact Section */}
          {/* <section id="contact" className="w-full">
            <div className="min-h-[80vh] w-full mx-auto flex justify-center items-center border border-dashed border-gray-600 rounded-lg shadow p-6 md:p-10 dark:border-gray-300 transition-all">
              <h2 className="text-4xl font-bold text-center">Contact</h2>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  </>
)

}

export default App
