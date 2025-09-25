import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agency from "./pages/Agency"
import Project from "./pages/Project"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agency" element={<Agency/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App
