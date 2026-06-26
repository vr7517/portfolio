import Header from './components/Header'
import Home from './components/Home'
import './App.css'

import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from "./components/Contact"
import Marquee from './components/Marquee'


function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-white text-black font-sans">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="relative flex-1 overflow-y-auto px-4 md:px-6   scrollbar-hide">
            <Home />
            <div className="px-5 py-4 text-gray-900 transition-colors duration-300">
              <Marquee speed={70} gap={60}>
                <span className="text-lg sm:text-xl font-semibold whitespace-nowrap text-gray-800">
                  Power BI ✦ SQL ✦ Microsoft Fabric ✦ Data Modeling ✦ Python ✦ DAX ✦ ETL Pipelines ✦ Interactive Dashboards ✦ Business Insights ✦ Data Storytelling ✦ Web Development ✦
                </span>
              </Marquee>
            </div>
            <About />
            <Skills />
            <Project />
            <Contact />
          </div>
        </div>
      </div>
    </>
  )

}

export default App
