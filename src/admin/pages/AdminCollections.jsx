import React, { useState } from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from '../../components/Footer'

function AdminCollections() {
  const [tab, setTab] = useState(1)
  return (
    <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5'>
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="my-10 text-center text-2xl font-bold">All Collections</h1>
        {/* tab */}
        <div className="flex justify-center items-center">
          <p onClick={()=>setTab(1)} className={tab==1? "font-bold border-gray-200 text-xl border-t border-l border-r p-3 cursor-pointer text-blue-600" : "border-b font-bold border:gray-200 text-xl p-3"}>Books</p>
           <p onClick={()=>setTab(2)} className={tab==2? "font-bold border-gray-200 text-xl border-t border-l border-r p-3 cursor-pointer text-blue-600" : "border-b font-bold border:gray-200 text-xl p-3"}>Users</p>
        </div>
        {/* tab contents */}
        {
          tab==1 &&
          <div className='md:grid grid-cols-4 w-full my-5'>
            {/* duplicate books card */}
            <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg" alt="book image" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                <h4 className="text-lg">title</h4>
                <h4>$ price</h4>
                <div className='grid mt-3 w-full'><button className='bg-green-600 mt-3 py-2 px-3 text-white'>APPROVE</button></div>
              </div>
            </div>
             {/* duplicate books card */}
            <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg" alt="book image" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                <h4 className="text-lg">title</h4>
                <h4>$ price</h4>
                <div className='grid mt-3 w-full'><button className='bg-green-600 mt-3 py-2 px-3 text-white'>APPROVE</button></div>
              </div>
            </div>
             {/* duplicate books card */}
            <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg" alt="book image" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                <h4 className="text-lg">title</h4>
                <h4>$ price</h4>
                <div className='grid mt-3 w-full'><button className='bg-green-600 mt-3 py-2 px-3 text-white'>APPROVE</button></div>
              </div>
            </div>
             {/* duplicate books card */}
            <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg" alt="book image" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                <h4 className="text-lg">title</h4>
                <h4>$ price</h4>
                <div className='grid mt-3 w-full'><button className='bg-green-600 mt-3 py-2 px-3 text-white'>APPROVE</button></div>
              </div>
            </div>

          </div>
        }
        {
          tab==2 &&
          <div className='md:grid grid-cols-3 w-full my-5'>
            {/* duplicate useres card*/}
            <div className="rounded bg-gray-200 p-3 m-2 text-wrap">
              <p className="text-red-600 font-bols">ID : dr12hds46d668i</p>
              <div className="flex items-center text-wrap mt-2">
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="user" />
                {/* content */}
                <div className=' ms-5'>
                  <h4 className="font-bold text-2xl text-blue-800">name</h4>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
            {/* duplicate useres card*/}
            <div className="rounded bg-gray-200 p-3 m-2 text-wrap">
              <p className="text-red-600 font-bols">ID : dr12hds46d668i</p>
              <div className="flex items-center text-wrap mt-2">
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="user" />
                {/* content */}
                <div className=' ms-5'>
                  <h4 className="font-bold text-2xl text-blue-800">name</h4>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
            {/* duplicate useres card*/}
            <div className="rounded bg-gray-200 p-3 m-2 text-wrap">
              <p className="text-red-600 font-bols">ID : dr12hds46d668i</p>
              <div className="flex items-center text-wrap mt-2">
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="user" />
                {/* content */}
                <div className=' ms-5'>
                  <h4 className="font-bold text-2xl text-blue-800">name</h4>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
            {/* duplicate useres card*/}
            <div className="rounded bg-gray-200 p-3 m-2 text-wrap">
              <p className="text-red-600 font-bols">ID : dr12hds46d668i</p>
              <div className="flex items-center text-wrap mt-2">
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="user" />
                {/* content */}
                <div className=' ms-5'>
                  <h4 className="font-bold text-2xl text-blue-800">name</h4>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
            

          </div>
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminCollections