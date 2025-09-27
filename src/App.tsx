import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Agency from "./pages/Agency"
import Project from "./pages/Project"
import StairAnimation from "./components/common/StairAnimation"

function App() {
  return (
    <div>
      <StairAnimation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      </StairAnimation>
    </div>
  )
}

export default App
