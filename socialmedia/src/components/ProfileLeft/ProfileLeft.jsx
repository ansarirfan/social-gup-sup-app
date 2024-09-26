import React from 'react'
import './ProfileLeft.css'
import InfoCard from '../InfoCard/InfoCard'
import FollowerCard from '../followers/FollowerCard'
import LogoSearch from '../logoSearch/LogoSearch'


const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
    <LogoSearch/>
    <InfoCard/>
    <FollowerCard/>
   </div>
  )
}

export default ProfileLeft
