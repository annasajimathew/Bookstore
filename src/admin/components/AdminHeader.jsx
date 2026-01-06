import React, { useContext } from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../../contextAPI/AuthContext'

function AdminHeader() {
  const {role,setAuthorised} = useContext(routeGuardContext)
  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setAuthorised(false)
    navigate('/login')
  }
  return (
    <>
    {/* header upper part */}
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* logo with titlw */}
        <div className="flex items-center">
          <img width={'80px'} height={'80px'} src="https://vectorified.com/images/book-icon-png-18.png" alt="logo" />
          <p className="font-bold text-2xl">BOOKSTORE</p>
        </div>
        {/* logout */}
        <button onClick={logout} className='bg-black px-3 py-2 border rounded text-white flex items-center hover:bg-white hover:text-black'><FaPowerOff className='me-2'/> LOG OUT</button>
      </div>
      {/* header lower part */}
      <div className="bg-black p-2">
        <marquee><p className="text-white">Welcome, Admin! You're all set to manage and monitor the system. Let’s get into work!</p></marquee>
      </div>
    </>
  )
}

export default AdminHeader