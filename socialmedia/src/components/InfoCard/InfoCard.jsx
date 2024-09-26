import React, {useEffect, useState} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
 import ProfileModel from '../ProfileModel/ProfileModel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../API/userRequest.js'
import { logOut } from '../../actions/AuthAction'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false) 
    const dispatch  =useDispatch()
    const  params = useParams()
    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})

    const {user} =  useSelector((state)=> state.authReducer.authData);

    useEffect (() =>{
        const fetchProfileUser = async() =>{
            if(profileUserId === user._id){
                setProfileUser(user)
               
            }else{
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
      

            }
        }
        fetchProfileUser();
    },[user])


   const handleLogOut = ()=>{
    dispatch(logOut())
   }

  return (
    <div className="InfoCard">
        <div className="infoHead">
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModel
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data = {user}
            />
          </div>
        ) : (
          ""
        )}
           
        </div>
        <div className="info">
                    {/* */}
            <span> <b>Status </b> </span>
            <span>{profileUser.relationship}</span>
        </div>
        <div className="info">
            <span> <b>Lives In </b> </span>
            <span>{profileUser.livesIn}</span>
        </div>
        <div className="info">
            <span> <b>Works At </b> </span>
            <span>{profileUser.worksAt}</span>
        </div>
        <button className="button logout-btn" onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default InfoCard
