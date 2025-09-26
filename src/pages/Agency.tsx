
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from "react"

const Agency = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

const imageArray = [
'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg', 
'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
'https://k72.ca/uploads/teamMembers/joe1_480X640_3-480x640.jpg'
]
  useEffect(() => {
    const element = imageDivRef.current
    const image = imageRef.current
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        // markers: true,
        start: 'top 36%',
        end: 'top -80%',
        pin: true,
        onUpdate : (element)=>{
          let imageIndex ;
          if(element.progress < 14){
            imageIndex = Math.floor(element.progress * imageArray.length)
            image.src = imageArray[imageIndex]
          }
          else{
            imageIndex = imageArray.length -1;
          }
        }
      },
      lazy: false
    });

    return ()=>{
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }

  }, [])


  return (
    <div>
      <div ref={imageDivRef} className="w-[19vw] absolute left-[30%] top-[40%]">
        <img ref={imageRef} className="w-full h-full rounded-3xl overflow-hidden" onLoad={()=>ScrollTrigger.refresh()} src=" https://k72.ca/images/teamMembers/Claire_640X960.jpg?w=640&h=960&s=8db7275995c2d79210fcf8641b5792fc" alt="image" />
      </div>
      <div className=" flex pl-4 absolute top-[45%] h-screen w-screen overflow-hidden">
        <h1 className='font-[font1] font-bold uppercase text-[18vw]'>
          Animatrix
        </h1>
      </div>
      <div className="pl-[50%]">
        <p className="text-[3vw] font-[font2] leading-[2.5vw] top-[85%] absolute">
          We’re curious souls with restless minds, always chasing the “what if” over the “what is.” For us, creativity isn’t about ego — it’s about energy, collaboration, and ideas that actually breathe. A brand isn’t a logo or a campaign; it’s alive — it speaks, feels, and grows with every story it tells. Miss that, and you might grab attention for a moment, but never build a legacy. That’s why we dig deeper, shaping stories that don’t just shine today, but stay unforgettable tomorrow.
        </p>
      </div>
    </div>
  )
}

export default Agency