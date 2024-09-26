import React, { useState } from 'react'
import './ImgPost.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../API/postRequest'

const ImgPost = ({data}) => {
  const {user} = useSelector((state) => state.authReducer.authData)
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike =()=>{
    setLiked((prev)=> !prev)
     likePost(data._id, user._id)
    liked? setLikes((prev)=> prev -1) :  setLikes((prev)=> prev +1)
  }
  return (
    <div className="ImgPost">
      <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image: ""} alt="" />

      <div className="postReact">  
        <img src={liked? Heart: NotLike } alt="" style={{cursor:"pointer"}} onClick={handleLike}/>
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{color: 'var(--grey)', fontSize:'12px'}}>{likes}Likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default ImgPost
