import React, { useEffect, useState } from 'react'
import Header from './Header'
import {Link} from "react-router-dom"

const Login = () => {
  // by default signin for will come
  const [isSigninform,setisSigninform]=useState(true)
  const [isLearnmore,setisLearnmore]=useState(false)

  const toggleHandler=()=>{
    // toggle feature
setisSigninform(!isSigninform)
  }

  const handlelearnmore=(e)=>{
    e.preventDefault()
    setisLearnmore(!isLearnmore)
  }

  useEffect(()=>{
    setisLearnmore(false)
  },[isSigninform])
  return (
    <div>
        <Header/>
        <div className='absolute '>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        </div>

        <form className='bg-black bg-opacity-80 p-12 absolute rounded-md w-2/6 my-32 mx-auto right-0 left-0  '>
            <div className='text-white font-semibold text-3xl  py-4'>{isSigninform?"Sign In":"Sign Up"}</div>
            {!isSigninform?<input type='text' placeholder='Full Name' className='p-6 my-4 bg-zinc-800 rounded-md border-none outline-none text-white w-full h-12 ' />:<></>}
            <input type='text' placeholder='Email or phone number' className='p-6 my-4 bg-zinc-800 rounded-md border-none outline-none text-white w-full h-12 ' />
            <input type='password' placeholder='Password'  className='p-6 my-4 bg-zinc-800 rounded-md border-none outline-none text-white w-full h-12'/>
            <button className='bg-red-600  my-8 text-white rounded-md font-semibold w-full h-12 text-center'>{isSigninform?"Sign In":"Sign Up"}</button>

            <div className='py-4 text-zinc-500 flex'>{isSigninform?"New to Netflix?":"Already Registered"}  
            &nbsp;<div className='text-white cursor-pointer hover:underline' onClick={()=>toggleHandler()}>{isSigninform?"Sign up now":"Sign In now"}</div>

            </div>
            {isSigninform?<p className='text-zinc-500 text-sm block'>
            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot .</span>&nbsp;
            <button className='text-blue-800 hover:underline' onClick={(e)=>handlelearnmore(e)}>{isLearnmore?"":"Learn More."}</button>
           
             

             {isLearnmore&&isSigninform?<span className='text-zinc-500 text-sm'>The information collected by Google reCAPTCHA is subject to the Google 
             &nbsp;<a href='https://policies.google.com/privacy' target='_blank' className='text-blue-600 hover:underline cursor-pointer'>Privacy Policy </a>
             and 
            <a href='https://policies.google.com/terms' target='_blank' className='text-blue-600 hover:underline cursor-pointer'> Terms of Service</a>
             , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google)</span>:<></>}
             </p>:<></>}
        </form>
        
        
        
        
        
       
    </div>
  )
}



export default Login