import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div duplicate */}
        <div className="bg-gray-200 p-5 rounded">

            <div className="md:grid grid-cols-[3fr_1fr]">

                <div>
                    <h2 className="text-2xl">Title</h2>
                    <h3 className="text-xl">Author</h3>
                    <h4 className="text-lg text-red-500 ">$ 400</h4>
                    <p className="text-justify">Abstract</p>
                    <div className="flex mt-5">
                        {/* pending */}
                        <img width={'120px'} height={'120px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="ppending" />
                        {/* approved */}
                        <img  width={'100px'} height={'100px'} src="https://static.vecteezy.com/system/resources/previews/024/382/871/non_2x/approved-sign-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="approved" />
                        {/* sold */}
                        <img width={'90px'} height={'90px'} src="https://static.vecteezy.com/system/resources/thumbnails/021/432/975/small_2x/sold-out-grunge-rubber-stamp-free-png.png" alt="sold" />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s" alt="book" />
                    <button className='p-2 bg-red-600 text-white mt-5'>DELETE</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default BookStatus;
