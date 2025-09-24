import { Link } from "react-router-dom"
const HomeBottomText = () => {
  return (
    <div className="flex font-[font2] flex-row justify-center gap-5 pb-2">
      <div className="text-[5vw] border-4 hover:border-[#D3FD50] hover:text-[#D3FD50] text-white gap-2 px-7 pb-1 rounded-full"><Link to={'/projects'}>Projects</Link></div>
      <div className="text-[5vw] border-4 hover:border-[#D3FD50] hover:text-[#D3FD50] text-white gap-2 px-7 pb-1 rounded-full"><Link to={'/agency'}>Agency</Link></div>
    </div>
  )
}

export default HomeBottomText