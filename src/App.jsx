import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import About from './components/About'
import Project from './components/Project'

function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen bg-darkbg dark:bg-gray-50 text-white dark:text-black overflow-hidden transition-all duration-300 ">
        {/* Main Content Area */}
        <div className="flex-1 relative flex flex-col overflow-hidden ">
          {/* Scrollable Page Content */}
          <div className="flex-1 overflow-y-auto px-6 space-y-10 scrollbar-hide">
            {/* Section: Home */}   
<Home/>
<About/>
            {/* Section: Skills */}
            <section id="skills">
              <div className="h-screen w-11/12 mx-auto flex justify-center items-center border border-dashed border-gray-600 rounded-lg shadow p-8 dark:border-gray-300">
                <h2 className="text-4xl font-bold">Skills</h2>
              </div>
            </section>

            {/* Section: Projects */}
           <Project/>

            {/* Section: Contact */}
            <section id="contact">
              <div className="h-screen w-11/12 mx-auto flex justify-center items-center border border-dashed border-gray-600 rounded-lg shadow p-8 dark:border-gray-300">
                <h2 className="text-4xl font-bold">Contact</h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
