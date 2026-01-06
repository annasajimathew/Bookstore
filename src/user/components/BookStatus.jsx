import React from 'react'
import { useState } from 'react'
import { getAllUserBooksAPI, removeBookAPI } from '../../services/allAPI'
import { useEffect } from 'react'

function BookStatus() {

  const [userBooks,setUserBooks] = useState([])
  console.log(userBooks);
  
  useEffect(()=>{
    getUserUploadBooks()
  },[])

  const getUserUploadBooks = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const result = await getAllUserBooksAPI(reqHeader)
      if(result.status==200){
        setUserBooks(result.data)
      }else{
        console.log(result);        
      }
    }
  }

  const deleteBook = async (id)=>{
     const token = sessionStorage.getItem("token")
     if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const result = await removeBookAPI(id,reqHeader)
      if(result.status==200){
        getUserUploadBooks()
      }else{
        console.log(result);        
      }
    }
  }

  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate */}
      {
        userBooks?.length>0?
          userBooks?.map(book=>(
            <div className="bg-gray-200 p-5 rounded mb-2">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                  <h2 className=" text-2xl">{book?.title}</h2>
                  <h3 className="text-xl">{book?.author}</h3>
                  <h4 className="text-lg text-red-500">$ {book?.discountPrice}</h4>
                  <p className="text-justify">{book?.abstract}</p>
                  <div className="flex mt-5">
                    {/* pending */}                    
                    {/* approved */}                    
                    {/* sold */}                    
                    {
                      book?.status=="pending" ?
                      <img width={'160px'} height={'160px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />
                      : book?.status=="approved"?
                      <img width={'100px'} height={'100px'} src="https://pngimg.com/d/approved_PNG1.png" alt="approved" />
                      :
                      <img width={'90px'} height={'90px'} src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-1.png" alt="sold" />
                    }
                  </div>
                </div>
                <div className='px-4 mt-4 md:mt-0 '>
                  <img className='w-50'  src={book?.imageURL} alt="book" />
                  <div className='flex justify-end'><button onClick={()=>deleteBook(book?._id)} className="p-2 bg-red-600 text-white mt-5 ">DELETE</button></div>
                </div>
              </div>
            </div>
          ))
        :
        <div className='text-center my-5 font-bold'>
          Books are not uploaded yet!!!
        </div>
      }
    </div>
  )
}

export default BookStatus