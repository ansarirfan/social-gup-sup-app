
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from '@iconscout/react-unicons'
import { useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'

const PostShare = () => {
  const loading = useSelector((state)=> state.postReducer.uploading)
  const [image, setImage] = useState(null)
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const imageRef = useRef()
  const desc = useRef()

  const onImageChange = (e) =>{
    // e.preventDefault()
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0];
      setImage(img);
    }
      };

      const reset = ()=>{
        setImage(null);
        desc.current.value = "";
      }

      const handleSubmit = (e) =>{
        e.preventDefault();

        const newPost = {
          userId : user._id,
          desc: desc.current.value
        }
        if(image){
          const data = new FormData()
          const filename = Date.now() + image.name
          data.append("name", filename)
          data.append("file", image)
          newPost.image = filename
          console.log(newPost)
          try {
            dispatch(uploadImage(data))
          } catch (error) {
            console.log(error)
          }
        }
        dispatch(uploadPost(newPost))
        reset();
      }
      
  
  return (
    <div className="PostShare">
        < img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic + "profile.jfif"} alt="" /> 
    <div>
    <input ref={desc} required type="text" placeholder='Whats Happening !' />

      <div className="postOptions">
          <div className='option' style={{color:'var(--photo)'}}
          onClick={() => imageRef.current.click()}
          ><UilScenery/>Photo's </div>
          
          <div className='option' style={{color:'var(--video)'}}><UilPlayCircle/>Video </div> {" "}
          <div className='option'style={{color:'var(--location)'}} ><UilLocationPoint/>Location </div>
          <div className='option' style={{color:'var(--schedule)'}}><UilSchedule/>Schedule </div>
          
          <button className="button ps-button" onClick={handleSubmit} disabled={loading}>{loading? "uploading..." : "Share"}</button>
          <div style={{display:'none'}}>
            <input type="file" name='myImage' ref={imageRef}  onChange={onImageChange}/>
          </div>
      </div>
      {image && (
       <div className="previewImage">
        <UilTimes onClick={() => setImage(null)}/>
        <img src={URL.createObjectURL(image)}alt="" />
       </div>
      )}
        </div>
    </div>
    );
    
};

export default PostShare
