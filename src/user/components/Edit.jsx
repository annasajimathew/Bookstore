import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'


function Edit() {
  const [offcanvasStatus, setOffcanvasStatus] = useState(false)
  return (
    <div>
        <button onClick={()=>setOffcanvasStatus(true)} className='flex items-center text-blue-600  border p-2 rounded hover:text-white hover:bg-blue-600'>Edit <FaEdit/></button>
        {/* offcanvas */}
        {
          offcanvasStatus &&
          <div>
            <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
            </div>
            <div className='bg-white h-full w-90 z-52 fixed top-0 left-0'>
                {/* header */}
                <div className="bg-black p-3 flex justify-between text-white">
                  <h3 className="text-xl">Update Profile</h3>
                  <button onClick={()=>setOffcanvasStatus(false)}><FaX/></button>

                </div>
                {/* body */}
                <div className="flex justify-center items-center flex-col mb-5 mt-10 ">
                  {/* image upload */}
                  <label htmlFor="uploadImg">
                    <input type="file" id='uploadImg' hidden />
                    <img style={{ width: '150px', height: '150px', borderRadius: '50%' }}src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="profile"/>
                  </label>
                  {/* edit button on profile pic */}
                  <button style={{marginTop:'-25px'}} className='bg-blue-600 p-2 text-white rounded'><FaPen/></button>
                  {/* name */}
                  <div className="mt-7 mb-2 w-full px-5">
                    <input className='border border-gray-200 p-2 rounded w-full' type="text" placeholder='Username' />
                  </div>
                  {/* password */}
                  <div className=" mb-2 w-full px-5">
                    <input className='border border-gray-200 p-2 rounded w-full' type="password" placeholder='New Password' />
                  </div>
                  <div className=" mb-2 w-full px-5">
                    <input className='border border-gray-200 p-2 rounded w-full' type="password" placeholder='Confirm Password' />
                  </div>
                  {/* bio */}
                  <div className=" mb-3 w-full px-5">
                    <textarea className='border border-gray-200 p-2 rounded w-full' type="password" placeholder='Bio' rows={3}  />
                  </div>
                  {/* button */}
                  <div className=" mb-3 flex justify-end w-full px-5 ">
                    <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
                    <button className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:border-green-600 hover:text-green-600'>UPDATE</button>
                  </div>
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Edit