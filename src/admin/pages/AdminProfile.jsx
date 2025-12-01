import React from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from '../../components/Footer'
import { FaPen } from 'react-icons/fa'

function AdminProfile() {
  return (
    <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5'>
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
        <div className="md:grid grid-cols-2 items-center mt-10 gap-10">
          {/* text content */}
          <div className='text-justify'>
            <p className='text-xl font-bold mb-3'>Welcome to the Admin Settings Panel.</p>
            <p>The Admin Settings page allows store administrators to easily manage all essential configurations of the bookstore. From updating store details and contact information to customizing operational settings, this page provides a clean and centralized dashboard for handling day-to-day adjustments. Admins can modify profile information, change login credentials, upload a profile image, and manage notification preferences to keep the system aligned with their workflow.</p> <br />
            <p>In addition to personal settings, the page enables control over system-wide preferences such as inventory display options, user permissions, theme customization, and security settings. Admins can fine-tune how books are organized, manage staff roles, enable or disable features, and maintain data privacy. Overall, the settings page ensures smooth bookstore operations with easy access to all important configuration tools.</p>
          </div>

          {/* form */}
               <div className="flex justify-center items-center flex-col mb-5 mt-3  bg-blue-100 p-5 rounded">
                  {/* image upload */}
                  <label htmlFor="uploadImg">
                    <input type="file" id='uploadImg' hidden />
                    <img style={{ width: '150px', height: '150px', borderRadius: '50%' }}src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="profile"/>
                  </label>
                  {/* edit button on profile pic */}
                  <button style={{marginTop:'-25px'}} className='bg-blue-600 p-2 text-white rounded'><FaPen/></button>
                  {/* name */}
                  <div className="mt-7 mb-2 w-full px-5">
                    <input className='border border-gray-200 bg-white p-2 rounded w-full' type="text" placeholder='Username' />
                  </div>
                  {/* password */}
                  <div className=" mb-2 w-full px-5">
                    <input className='border border-gray-200  bg-white p-2 rounded w-full' type="password" placeholder='New Password' />
                  </div>
                  <div className=" mb-2 w-full px-5">
                    <input className='border border-gray-200  bg-white p-2 rounded w-full' type="password" placeholder='Confirm Password' />
                  </div>
                  
                  {/* button */}
                  <div className=" mb-3 flex justify-center gap-3 w-full px-5 ">
                    <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
                    <button className='px-3 py-2 rounded border bg-blue-600 text-white hover:bg-white hover:border-blue-600 hover:text-blue-600'>UPDATE</button>
                  </div>
                </div>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default AdminProfile