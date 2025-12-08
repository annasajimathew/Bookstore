import React, {  useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function Header() {
  const [listStatus, setListStatus] = useState(false)
  const [dp, setDp] = useState("")
  const [token, setToken] = useState("")
  const [dropDown, setDropDown] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  },[token])

  const menuBtnClick = ()=>{
    setListStatus(!listStatus)
  }
  return (
    <>
    {/* upper part : title , login */}
    <div className='grid grid-cols-3 p-2'>
      {/* logo with title */}
      <div className="flex items-center">
        <img width={'70px'} height={'70px'} src="https://vectorified.com/images/book-icon-png-18.png" alt="logo" />
        <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOKSTORE</h1> {/* small-yes */}
      </div>
      {/* title  */}
      <div className="md:flex justify-center items-center hidden"> {/* large-yes(flex), small-no */}
        <h1 className='text-3xl font-bold'>BOOK STORE</h1>
      </div>
      {/* login */}
      <div className="md:flex justify-end items-center hidden">
        {/* insta, facebook, twitter */}
        <FaInstagram/>
        <FaFacebook className='mx-2'/>
        <FaTwitter/>

        {/*login link  */}
        {
          !token?
          <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
          :
          <div className="relative inline-block text-left ms-2">
            <button onClick={()=>setDropDown(!dropDown)} className="w-full bg-whie px-3 py-2 shadow hover:bg-gray-50">
              <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740&q=80" alt="display-picture" />
            </button>
            {
              dropDown &&
              <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-l ring-black/5 focus:outline-hidden">
              <Link to={'/user/profile'} className='px-4 py-2 text-gray-700 flex items-center '><FaAddressCard className='me-2'/> Profile</Link>
              <button className=' px-4 py-2 text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
            </div>
            }
          </div>
      
        }
        
      </div>

    </div>

    {/* header lower part - link, menu + login btn  in large screen*/}
    <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
      {/* div - menu bar icon with login btn in mobile screen */}
      <div className="flex justify-between items-center md:hidden">
        {/* menu bar btn */}
        <button onClick={menuBtnClick}><FaBars/></button>
        {/* login link */}
        {
          !token?
          <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
          :
          <div className="relative inline-block text-left ms-2">
            <button onClick={()=>setDropDown(!dropDown)} className="w-full bg-whie px-3 py-2 shadow hover:bg-gray-50">
              <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740&q=80" alt="display-picture" />
            </button>
            {
              dropDown &&
              <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-l ring-black/5 focus:outline-hidden">
              <Link to={'/user/profile'} className='px-4 py-2 text-gray-700 flex items-center '><FaAddressCard className='me-2'/> Profile</Link>
              <button className=' px-4 py-2 text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
            </div>
            }
          </div>
      
        }
      </div>
      {/* ul - links */}
      <ul className={listStatus?"flex flex-col" : "md:flex justify-center items-center hidden"}>
        <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} >HOME</Link></li>
        <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'}>BOOKS</Link></li>
        <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'}>CONTACT</Link></li>
        
      </ul>

    </nav>
    </>
  )
}

export default Header