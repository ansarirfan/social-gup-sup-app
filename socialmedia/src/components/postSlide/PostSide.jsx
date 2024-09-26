import React from 'react'
import './PostSide.css'
import PostShare from '../postSahare/PostShare'
import Posts from '../Posts/Posts'

const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare/>
      <Posts/>
    </div>
  )
}

export default PostSide
