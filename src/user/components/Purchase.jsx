import React from 'react'

function Purchase() {
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
                        {/* purchase */}
                        <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="purchase" />
                        
                    </div>
                </div>

                <div className='flex flex-col'>
                    <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s" alt="book" />
                </div>

            </div>

        </div>
    </div>
  )
}

export default Purchase