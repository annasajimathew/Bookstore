import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../contextAPI/AuthContext'

function Pnf() {
  const {role,authorised} = useContext(routeGuardContext)
  const navigate = useNavigate()
  const backHome = ()=>{
    if(authorised){
      role=="user" ? navigate('/'):navigate('/admin/home')
    }else{
      navigate('/')
    }
  }
  return (
    <div className='h-screen flex justify-center flex-col items-center'>
      <img width={'25%'} src="https://webytag.com/wp-content/uploads/2024/07/c19fc414b5c17a9e286bd53c5ab19e7c.gif" alt="pnf" />
      <p>Oh!! No..</p>
      <h1 className="text-blue-600 text-2xl">Look Like You're Lost!</h1>
      <p>The Page your Looking is not avaliable</p>
      <button onClick={backHome} className='bg-black py-2 px-3 rounded my-3 text-white'>Home</button>
    </div>
  )
}

export default Pnf