import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../actions/userAction'

const User = ({person}) => {
    const dispatch = useDispatch()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } =  useSelector((state)=> state.authReducer.authData);
    const [following, setFollowing] = useState(
        person.followers.includes(user._id)
      );
const handleFollow = ()=>{
    following
    ? dispatch(unFollowUser(person._id, user))
    : dispatch(followUser(person._id, user));
  setFollowing((prev) => !prev);
};


  return (
    <div className="follower">
    <div>
     <img src={person.profilePicture? serverPublic + person.profilePicture : serverPublic + "profile.jfif"} alt=""  className='followerImg'/>

     <div className="name">
         <span>{person.firstname}</span>
         <span>{person.username}</span>
     </div>
    </div>
    <button className={following? "button fc-btn UnfollowBtn": "button fc-btn"} onClick={handleFollow} > {following ? "Unfollow" : "Follow"}</button>
 </div>
  )
}

export default User