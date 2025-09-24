import Video from "./home/Video"

const HomeTopText = () => {
  return (
    <div className='font-[font1] uppercase text-[9vw] flex flex-col items-center leading-[8vw] text-white pt-4'>
        <div>
            The Buzz  
        </div>
        <div className="flex flex-row justify-center justify-items-center">
            Behind <div className="h-[6vw] w-[12vw] rounded-2xl overflow-hidden   "><Video/></div> Every
        </div>
        <div>
            Big Idea
        </div>
    </div>
  )
}

export default HomeTopText