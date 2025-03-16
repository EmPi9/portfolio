import './App.css'
import './index.css'
import { PreLoaderScreen } from './components/PreLoaderScreen'
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import { useState } from 'react'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
    
  return (
    <>
      {!isLoaded && <PreLoaderScreen onComplete={() => setIsLoaded(true)}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
