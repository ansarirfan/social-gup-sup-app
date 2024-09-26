import React, { useEffect, useState } from 'react'
import './FollowerCard.css'

import User from '../user/User'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../API/userRequest'



const FollowerCard = () => {
  const [persons, setPersons] = useState([])
  const { user } =  useSelector((state)=> state.authReducer.authData)

  useEffect(() =>{
    const fetchPerson = async()=>{
    const {data} = await getAllUser();
    setPersons(data)
    console.log(data)
    };
    fetchPerson();
  }, [])
   return (
    <div className='FollowerCard'>
     <h3>People you may know </h3>
     {
        persons.map((person, id) =>{
 
    if(person._id !== user._id){
      <User person = {person} key={id} />
    }
   
 
        })
     }
    </div>
  )
}

export default FollowerCard
