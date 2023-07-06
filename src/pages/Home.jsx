import Posts from "../components/postSide/PostSide"
import ProfileSide from "../components/profileSide/ProfileSide"
import RightSide from "../components/rightSide/RightSide"

const Home = () => {
  return (
    <div className='home relative grid grid-cols-[20rem_minmax(auto,_1fr)_19rem] gap-5 '>
      <ProfileSide/>
      <Posts/>
      <RightSide/>
    </div>
  )
}

export default Home
