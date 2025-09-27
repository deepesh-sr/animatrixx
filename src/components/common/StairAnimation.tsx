import gsap from 'gsap'
import { useEffect, useRef } from "react"
import { useLocation } from 'react-router-dom';

const StairAnimation = ({children}) => {

  const divRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  console.log(location.pathname)

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(divRef.current,{
        display : 'block flex'
    })

     tl.from('.stair', {
            height: 0,
            stagger: 0.15
        })
        tl.to('.stair', {
            y: '100%',
            stagger: 0.1
        })
        tl.to(divRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })

    // const timer = setTimeout(()=>{
    //   if (divRef.current) {
    //     divRef.current.style.display = 'none';
    //   }
    //   return clearInterval(timer)
    // },2000)
    gsap.from(childRef.current,{
        opacity : 0,
        delay : 1.6
    })

  }, [location.pathname])

    return (
        <div>
            <div ref={divRef} className="h-screen w-full flex flex-row fixed top-0 left-0 z-10">
                <div className="stair bg-black h-screen w-1/5 "></div>
                <div className="stair bg-white h-screen w-1/5 "></div>
                <div className="stair bg-black h-screen w-1/5 "></div>
                <div className="stair bg-black h-screen w-1/5 "></div>
                <div className="stair bg-black h-screen w-1/5 "></div>

            </div>
            <div ref={childRef} >
                {children}
            </div>
        </div>
    )
}

export default StairAnimation