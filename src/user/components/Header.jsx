import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function Header() {
  const [listStatus, setListStatus] = useState(false)

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
        <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
      </div>

    </div>

    {/* lower part - link, menu + login btn  in large screen*/}
    <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
      {/* div - menu bar icon with login btn in mobile screen */}
      <div className="flex justify-between items-center md:hidden">
        {/* menu bar btn */}
        <button onClick={menuBtnClick}><FaBars/></button>
        {/* login */}
        <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
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