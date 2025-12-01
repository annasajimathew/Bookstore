import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'


function Profile() {
  const [tab, setTab] = useState(1)
  return (
    <>
      <Header />

      {/* black div */}
      <div style={{ height: '200px' }}className="bg-black"></div>

      {/* profile image */}
      <div style={{width: '230px',height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px'}} className="bg-white p-3">
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }}src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="profile"/>
      </div>
      {/* name with edit block */}
      <div className="flex justify-between items-center my-5 md:px-20 px-5">
        <h1 className="text-2xl font-bold flex items-center mx-5 md:mx-20">Username <FaCircleCheck className='text-blue-400 ms-5'/></h1>
        <Edit/>
      </div>
      <p className="text-justify md:px-20 px-5 my-5 ">
        Welcome to your BookStore profile! This is your personal space where you can explore your favorite genres, keep track of the books you love, and manage your reading preferences. Whether you're discovering new titles or revisiting past favorites, your profile helps you stay organized and enjoy a smoother, more personalized reading experience.</p>
        {/* tabs with contents */}
        <div className="md:px-40">
          <div className="flex justify-center items-cemter my-8 font-medium text-lg">
            <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 border-gray-200 border-t border-l border-r p-2 cursor-pointer' :' border-gray-200 border-b p-4 cursor-pointer' }>Sell Books</p>
            <p onClick={()=>setTab(2)}  className={tab==2?'text-blue-600 border-gray-200 border-t border-l border-r p-2 cursor-pointer' :' border-gray-200 border-b p-4 cursor-pointer' }>Book Status</p>
            <p onClick={()=>setTab(3)}  className={tab==3?'text-blue-600 border-gray-200 border-t border-l border-r p-2 cursor-pointer' :' border-gray-200 border-b p-4 cursor-pointer' }>Purchase History</p>
          </div>
          {/* contents */}
          {
            tab==1 &&
            <SellBook/>
            }
          {
            tab==2 &&
            <BookStatus/>
            }
          {
            tab==3 &&
            <Purchase/>
            }
        </div>
      <Footer />
    </>
  )
}

export default Profile
