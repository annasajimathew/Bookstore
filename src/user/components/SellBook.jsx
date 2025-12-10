import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

function SellBook() {
    const [bookDetails, setBookDetails] = useState({
        title:"",author:"",pages:"",price:"",discountPrice:"",imageURL:"",abstract:"",language:"",publisher:"",isbn:"",category:"",uploadImages:[]
    })
    const [preview, setPreview] = useState("") 
    const [previewList, setPreviewList] = useState([])
    console.log(bookDetails);
    

    const handleUploadBookImage = (e)=>{
        //get file which is upload
        console.log(e.target.files[0]);
        //add fileto state
        const imgFileArray = bookDetails.uploadImages
        imgFileArray.push(e.target.files[0])
        setBookDetails({...bookDetails,uploadImages:imgFileArray})
        //conver file to url
        const url = URL.createObjectURL(e.target.files[0])
        console.log(url);
        setPreview(url)
        const bookImagesArray = previewList
        bookImagesArray.push(url)
        setPreviewList(bookImagesArray)
        
        
    }
    

  return (
    <div>
        <div className="p-10 my-20 mx-5 bg-gray-200">
            <h1 className="text-center text-3xl font-bold">Upload Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})}  type="text" placeholder='Book Title' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input  value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text" placeholder='Author' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input  value={bookDetails.pages} onChange={e=>setBookDetails({...bookDetails,pages:e.target.value})} type="text" placeholder='No.of Pages' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input  value={bookDetails.imageURL} onChange={e=>setBookDetails({...bookDetails,imageURL:e.target.value})} type="text" placeholder='Image URL' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input  value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} type="text" placeholder='Original Price' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input  value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})} type="text" placeholder='Discount Price' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <textarea rows={5} type="text" placeholder='Book Abstract' className="p-2 bg-white w-full rounded" />
                    </div>
                </div>
                <div className="px-3">
                     <div className="mb-3">
                        <input  value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})} type="text" placeholder='Language' className="p-2 bg-white w-full rounded" />
                    </div>
                     <div className="mb-3">
                        <input  value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" placeholder='Publisher' className="p-2 bg-white w-full rounded" />
                    </div>
                     <div className="mb-3">
                        <input  value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})} type="text" placeholder='ISBN' className="p-2 bg-white w-full rounded" />
                    </div>
                     <div className="mb-3">
                        <input  value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})} type="text" placeholder='Category' className="p-2 bg-white w-full rounded" />
                    </div>

                    {/* ----upload image button---- */}
                    <div className="mb-3 flex justify-center items-center mt-10">
                        <label htmlFor="uploadImg">
                            <input  onChange={e=>handleUploadBookImage(e)} type="file"  id="uploadImg" hidden />
                            <img width={'200px'} className='cursor-pointer' src={preview? preview:"https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" }alt="upload" />
                        </label>
                    </div>
                    {/* for more image upload */}
                        {
                            preview &&
                            <div className="flex justify-Center items-center">
                                {/* uploading images */}
                                {
                                    previewList?.map((bookImgURL,index)=>(
                                        <img key={index} width={'70px'} height={'70px'} className='mx-3' src={bookImgURL} alt="upload book" />
                                    ))
                                }
                                {/* add more file upload button (+) */}
                                {
                                    previewList.length<3 &&
                                    <label htmlFor="bookImages" className='flex items-center   '>
                                    <input onChange={e=>handleUploadBookImage(e)} type="file" id='bookImages' hidden />
                                    <FaPlus className='text-3xl ms-3'/>
                                </label>
                                }

                            </div>
                            }
                </div>
            </div>
            <div className="flex justify-end mt-5">
                <button className='bg-gray-600 text-white text-center p-2 rounded me-5 hover:bg-white hover:text-gray-400'>RESET</button>
                <button className='bg-blue-400 text-white text-center p-2 rounded me-5 hover:bg-white hover:text-gray-400'>ADD BOOK</button>
            </div>
        </div>
    </div>
  )
}

export default SellBook