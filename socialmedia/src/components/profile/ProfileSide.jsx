import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import FollowerCard from '../followers/FollowerCard'


const ProfileSide = () => {
  return (
    <div className="ProfileSide">
    <LogoSearch/>
    <ProfileCard location= "homepage"/>
    <FollowerCard/>
    </div>
  )
} 

export default ProfileSide
