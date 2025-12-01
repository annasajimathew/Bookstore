import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Authent({ insideRegister }) {
  const [viewPassword, setViewPassword] = useState(false)

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
              <input type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5' />
            }

            {/* email */}
            <input type="text" placeholder='EMAIL-ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5' />

            {/* password */}
            <div className='relative mb-5'>
              <input 
                type={viewPassword ? "text" : "password"} 
                placeholder='Password' 
                className='bg-white text-black placeholder-gray-400 w-full p-2 rounded pr-10' />
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
                <button type='button' className='bg-green-700 p-2 w-full rounded '>Register</button>
                :
                <button className='bg-green-700 p-2 w-full rounded '>Login</button>
              }
            </div>

            {/* google authentication */}
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
    </div>
  )
}

export default Authent;
