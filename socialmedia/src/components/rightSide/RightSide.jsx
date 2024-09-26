import React, {useState} from 'react'
import './RightSide.css'
import ShareModel from '../shareModel/ShareModel'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import { Link } from 'react-router-dom'

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false) 
  return (
   <div className="RightSide">
    <div className="navIcon">
    <Link to = "../home">
    <img src={Home} alt="" />
    </Link>
        <UilSetting/>
        <img src={Noti} alt="" />
        <Link to= '../chat'>
        <img src={Comment} alt="" />
        </Link>
        
    </div>
    <TrendCard />

    <button className='button r-btn'
     onClick={() =>setModalOpened(true)}>
     <ShareModel modelOpened={modalOpened}
     setModelOpened={setModalOpened}
     />
    Share</button>
</div>

  )
}

export default RightSide