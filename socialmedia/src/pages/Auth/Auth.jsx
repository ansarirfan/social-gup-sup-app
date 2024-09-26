import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Auth.css'
import Logo from '../../img/logo.png'
import { logIn, singUp } from '../../actions/AuthAction';


const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state)=> state.authReducer.loading)
     const [isSignUp, setIsSignUp] = useState(false);
     const [confirmpass, setConfirmpass] = useState(true)
     console.log(loading)
     const  [data, setData] = useState({username: "", firstname: "", lastname: "", password: "", confirmpass: ""})
  
     const handleChange = (e)=>{
     setData ({...data, [e.target.name]: e.target.value})

     }

     const handleSubmit = (e) =>{
        e.preventDefault();
        if(isSignUp){
        data.password === data.confirmpass ? dispatch(singUp(data)) : setConfirmpass(false)
        }else{
            dispatch(logIn(data))
        }
     }

     const resetForm = () =>{
        setConfirmpass(true);
        setData({
            username: "", firstname: "", lastname: "", password: "", confirmpass: "" 
        })
     }
  
     return (
   <div className="Auth">
    {/* leftside */}
    <div className="a-left">
        <img src={Logo} alt="" />
   
    <div className="webname">
        <h1>GupSup Media</h1>
        <h6>Explore Idea Throughout World</h6>
    </div>
    </div>

    {/* rightside /> */}

    <div className="a-right">
            <form action="" className="infoForm authForm" onSubmit={handleSubmit}>  


                <h3> {isSignUp? "Sign Up" : "Log In"} </h3>

                {isSignUp && (
                    <div>
                    <input type="text" placeholder='First Name' name='firstname' className='infoInput' onChange= {handleChange} value={data.firstname}/>
                    <input type="text" placeholder='Last Name' name='lastname' className='infoInput'onChange= {handleChange} value={data.lastname}/>
                </div>
                )}
                
                <div>
                <input type="text" placeholder='users name' name='username' className='infoInput' onChange= {handleChange} value={data.username}/>
                </div>
                <div>
                <input type="password" placeholder='password' name='password' className='infoInput' onChange= {handleChange} value={data.password}/>
               
                {isSignUp &&  <input type="password" placeholder='confirm password' name='confirmpass' className='infoInput' onChange= {handleChange} value={data.confirmpass}/>}
                
                </div>
                <span style={{display: confirmpass ? 'none': 'block', color:'red', fontSize:'12px', alignSelf:'flex-end', marginRight:'5px'}}>
                    *Confirm Password is not same
                </span>
                <div>
                    <span style={{fontSize:'12px', cursor:"pointer"}} onClick={() => {setIsSignUp((prev)=> !prev); resetForm()}}>
                    {isSignUp? "Already have account. Log In !" : "Don't have account? Sign up !"}</span>
                    <button className="button infobtn" type='submit' disabled={loading}>
                     {loading ? "Loading...": isSignUp? "Sign Up" : "Log In"}</button>
                
                </div>
               
            </form>
        </div>
   </div>
   
  );
};
export default Auth


// function Signup() {
//     return(
        
//     )
//    };


