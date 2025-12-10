import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPI'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';





function Authent({ insideRegister }) {

  const navigate = useNavigate()

  const [viewPassword, setViewPassword] = useState(false)

  //to store data from FORM
  const [userDetails, setUserDetails] = useState({
    username:"", email:"", password:""
  })
  //console.log(userDetails);

  //register
  const handleRegister = async (e)=>{
    e.preventDefault()
    const { username, email, password } = userDetails
    if(username && email && password){
      //toast.success("API Call")
      try{
        const result = await registerAPI(userDetails)
        console.log(result);
        if(result.status==200){
          toast.success("Register Successfull...Please Login to Bookstore")
          setUserDetails({username:"", email:"", password:""})
          navigate('/login')
        }else if(result.status==409){
          toast.warning(result.response.data)
          setUserDetails({username:"", email:"", password:""})
          navigate('/login')
        }else{
          console.log(result);
          toast.error("Something Went Wrong")
          setUserDetails({username:"", email:"", password:""})
        }
        
      }catch(err){
          console.log(err);
      }

    }else{
      toast.info("Please Fill the Form Completely")
    }
  }
  
  //login
  const handleLogin = async (e)=>{
    e.preventDefault()
    const { email, password } = userDetails
    if(email && password){
      
      try{
        //API Call
        const result = await loginAPI(userDetails)
        console.log(result);
        if(result.status==200){
          toast.success("Login Successfull")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(()=>{
            if(result.data.user.role=="admin"){
              navigate('/admin/home')
            }else{
              navigate('/')
            }
          },2500)
        }else if(result.status==401 || result.status==404){
          toast.warning(result.response.data)
          setUserDetails({username:"", email:"", password:""})
        }else{
          toast.error("something went wromg")
          setUserDetails({username:"", email:"", password:""})
        }       
      }catch(err){
          console.log(err);
      }
    }else{
      toast.info("Please Fill the Form Completely")
    }
  }

  //google login
  const handleGoogleLogin = async (credentialResponse)=>{
    console.log("inside handleGoogleLogin ");
    console.log(credentialResponse);
    const decode = jwtDecode(credentialResponse.credential)
    console.log(decode);
    //email,name,picture
     const result = await googleLoginAPI({username:decode.name,email:decode.email,password:'googlePassword',picture:decode.picture})
        
        if(result.status==200){
          toast.success("Login Successfull")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(()=>{
            if(result.data.user.role=="admin"){
              navigate('/admin/home')
            }else{
              navigate('/')
            }
          },2500)
        }else if(result.status==401 || result.status==404){
          toast.warning(result.response.data)
          setUserDetails({username:"", email:"", password:""})
        }else{
          console.log(result);
          toast.error("something went wromg")
        }
  }


  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/bg-img.jpeg)] bg-cover bg-center'>
      <div className='p-10'>
        <h1 className="text-3xl font-bold text-white text-center" style={{ textShadow: '2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black' }}>BOOK STORE</h1>
        <div style={{width:'400px'}} className="bg-black text-white p-5 flex flex-col justify-center items-center my-5">
          <div style={{width:'100px', height:'100px', borderRadius:'50%'}} className="border mb-5 flex justify-center items-center">
            <FaUser className='text-3xl'/>
          </div>
          <h2 className="text-2xl">{insideRegister ? "Register" : "Login"}</h2>
          <form className="my-5 w-full">
            {/* username */}
            {insideRegister && 
              <input value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}  type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5' />
            }

            {/* email */}
            <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="text" placeholder='EMAIL-ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5' />

            {/* password */}
            <div className='relative mb-5'>
              <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type={viewPassword ? "text" : "password"} placeholder='Password' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded pr-10' />
              {
              viewPassword ? 
                <FaEyeSlash 
                  className='absolute right-3 top-2.5 text-gray-400 cursor-pointer' 
                  onClick={() => setViewPassword(!viewPassword)} 
                /> :
                <FaEye 
                  className='absolute right-3 top-2.5 text-gray-400 cursor-pointer' 
                  onClick={() => setViewPassword(!viewPassword)} 
                />
              }
            </div>

            {/* forgot password */}
            {
            !insideRegister &&
              <div className="flex justify-between mb-5">
                <p className="text-xs text-orange-300">Never Share Your Password With Others</p>
                <button className='text-xs underline'>Forgot Password</button>
              </div>
            }

            {/* login/register btn */}
            <div className='text-center'>
              {insideRegister ?
                <button onClick={handleRegister} type='button' className='bg-green-700 p-2 w-full rounded cursor-pointer '>Register</button>
                :
                <button onClick={handleLogin} className='bg-green-700 p-2 w-full rounded cursor-pointer '>Login</button>
              }
            </div>

            {/* google authentication */}
            <div className="text-center my-5">
              {
                !insideRegister &&
                <p>------------------or------------------</p>
              }
              {
                !insideRegister &&
                <div className="my-5 flex justify-center items-center w-full">
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      handleGoogleLogin(credentialResponse)
                      
                    }}
                    onError={() => {
                      console.log('Login Filed');
                      
                    }}
                  />
                </div>
              }
            </div>
            <div className="my-5 text-center">
              {insideRegister ?
                <p className='text-blue-600'>Already a User ? <Link to={'/login'} className='underline ml-2'>Login</Link></p>
                :
                <p className='text-blue-600'>Are You a New User ? <Link to={'/register'} className='underline ml-2'>Register</Link></p>
              }
            </div>
          </form>
        </div>
      </div>
      {/* toast */}
      <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
    </div>
  )
}

export default Authent;
