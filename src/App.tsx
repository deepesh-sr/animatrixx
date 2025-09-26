import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agency from "./pages/Agency"
import Project from "./pages/Project"
import gsap from 'gsap'
import { useEffect, useRef } from "react"

function App() {
  const divRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from('.stair', {
      height: 0,
      stagger: 0.1,
    })

    tl.to('.stair', {
      y: '100%',
      stagger: 0.1
    })
    
    const timer = setTimeout(()=>{
      divRef.current.style.display = 'none';
      return clearInterval(timer)
    },2000)
    

  }, [])

  return (
    <div>
      <div ref={divRef} className="h-screen w-full flex flex-row fixed top-0 left-0 z-10">
        <div className="stair bg-black h-screen w-1/5 "></div>
        <div className="stair bg-black h-screen w-1/5 "></div>
        <div className="stair bg-black h-screen w-1/5 "></div>
        <div className="stair bg-black h-screen w-1/5 "></div>
        <div className="stair bg-black h-screen w-1/5 "></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
