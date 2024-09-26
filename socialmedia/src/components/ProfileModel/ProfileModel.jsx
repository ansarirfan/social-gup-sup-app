import {Modal, useMantineTheme} from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../actions/userAction';

function ProfileModel({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();
    const { password, ...other } = data;
    const [formData, setFormData] = useState(other);
    const {profileImage, setProfileImage} = useState(null)
    const {coverImage, setCoverImage} = useState(null)
    const dispatch = useDispatch()
    const param = useParams()
    const { user } =  useSelector((state)=> state.authReducer.authData);   

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  //

      const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          event.target.name === "profileImage"
            ? setProfileImage(img)
            : setCoverImage(img)
        }
      };

      // form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(user.data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch( uploadImage(user.data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

    return(
        <Modal overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9]:theme.colors.gray[2] }  
        overlayOpacity={0.55}
        overlayBlur={3}
        size='55%'
        opened={modalOpened}
        onClose={()=> setModalOpened(false)}
        >
         
       <form  className="infoForm">
        <h3>Your Info</h3>  
        <div>
        <input onChange={handleChange} value={formData.firstname} type="text" placeholder='First Name' name='firstname' className='infoInput' />
        <input type="text" placeholder='Last Name' name='lastname' className='infoInput' onChange={handleChange} value={formData.lastname} />
        </div>
        <div>
        <input type="text" placeholder='Works At' name='worksAt' className='infoInput' onChange={handleChange} value={formData.worksAt} />
        </div>
        <div>
        <input type="text" placeholder='LivesIN' name='livesIn' className='infoInput' onChange={handleChange} value={formData.livesIn}/>
        <input type="text" placeholder='County' name='country' className='infoInput' onChange={handleChange} value={formData.country} />
        </div>
        <div>
        <input type="text" placeholder='Relationship Status' name='relationship' className='infoInput' onChange={handleChange}  value={formData.relationship} />
        </div>
        <div>
            Profile Image
            <input type="file"  name='profileImage' onChange={onImageChange}/>
            <input type="file"  name='coverImage'  onChange={onImageChange}/>
        </div>
        <button className='button infobtn' onClick={handleSubmit}>Update</button>
       </form>
        </Modal>
    )
}

export default ProfileModel