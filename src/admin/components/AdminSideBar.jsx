import React from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function AdminSideBar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center '>
      {/* admin image */}
      <div className='my-10 flex justify-center items-center'>
        <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="user" />
      </div>
      {/* name */}
      <h1 className="text-lg font-bold mb-5">name</h1>
      {/* links */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="mb-3">
          <Link to={'/admin/home'} className='flex items-center'><FaHome className='me-2'/>Dashboard</Link>
        </div>
        <div className="mb-3">
          <Link to={'/admin/resources'} className='flex items-center'><FaBookReader className='me-2'/>Resources</Link>
        </div>
        <div className="mb-3">
          <Link to={'/admin/profile'} className='flex items-center'><FaGears className='me-2'/>Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSideBar