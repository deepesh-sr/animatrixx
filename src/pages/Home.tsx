import Video from '../components/home/Video'
import HomeTopText from '../components/HomeTopText'
import HomeBottomText from '../components/HomeBottomText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed '><Video/></div>
        <div className='h-screen w-screen relative flex flex-col justify-between'>
            <HomeTopText/>
            <HomeBottomText/>
        </div>
    </div>
  )
}

export default Home