import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'

function Home() {
  return (
    <>
      <Header/>
      <div>
        {/* landing part - search */}
        <div style={{height:'500px'}} className='flex justify-center items-center flex-col bg-[url(/bg-img.jpeg)] bg-cover bg-center text-white'>
        <div style={{height:'500px', backgroundColor:'rgba(0,0,0,0.4)'}} className='w-full flex justify-center items-center flex-col '>
          <h1 className='text-5xl font-bold mb-2'>Wondeful Gifts</h1>
          <p>Gift your family and friends a BOOKSTORE</p>
          {/* search */}
          <div className="mt-9 flex items-center">
            <input type="text" className="bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2" placeholder='Search Books Here' />
           <button className="text-gray-500" style={{ marginLeft: '-40px' }}><FaSearch /></button>

          </div>
        </div>

        </div>
        {/* new arrival part */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className='text-3x1 font-bold'>NEW ARRIVALS</h1>
        <h2 className='text-2x1'>Explore Our Latest Collections</h2>

        {/* books row & col */}
       <div className=" md:grid grid-cols-4  w-full mt-10">

          {/* duplicate book card div */}
          <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
            <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg" alt="book image" />
            <div className='flex justify-center items-center flex-col mt-4'>
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$ price</h4>
            </div>
          </div>
          {/* duplicate book card div */}
          <div className="shadow rounded p-3 mx-4 ">
            <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg" alt="book image" />
            <div className='flex justify-center items-center flex-col mt-4'>
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$price</h4>
            </div>
          </div>
          {/* duplicate book card div */}
          <div className="shadow rounded p-3 mx-4">
            <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg" alt="book image" />
            <div className='flex justify-center items-center flex-col mt-4'>
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$price</h4>
            </div>
          </div>
          {/* duplicate book card div */}
          <div className="shadow rounded p-3 mx-4">
            <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg" alt="book image" />
            <div className='flex justify-center items-center flex-col mt-4'>
              <h3 className="text-blue-600 font-bold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$price</h4>
            </div>
          </div>

       </div>
        {/* all books link */}
        <div className="text-center m-20">
          <button to={'/books'} className="p-2 bg-blue-600 text-white">Explore More</button>
        </div>

        </section>
        {/* author */}
        <section className='md:px-40 p-5 my-5 md:flex items-center gap-10'>
  {/* author content */}
  <div className='md:w-1/2'>
    <h1 className="text-2xl font-bold">FEATURED AUTHORS</h1>
    <h2 className="text-xl mt-2">Captives With Every Word</h2>
    <p className="text-justify mt-5">
      Our featured author of the month is widely admired for their exceptional storytelling and the unique way they bring characters and emotions to life. Their writing has captured the hearts of readers around the world, offering stories filled with depth, imagination, and meaningful messages. Over the years, they have created works that span different genres, each carrying a style that is both engaging and unforgettable. Whether you are exploring their books for the first time or revisiting your favorites, their stories continue to inspire, comfort, and spark curiosity in readers of all ages. We invite you to dive into their world and experience the creativity, passion, and brilliance that make them one of the most beloved authors today. Their dedication to literature has influenced countless aspiring writers and shaped the way modern storytelling is appreciated. By reading their works, you not only enjoy compelling narratives but also gain insight into the human experience through the lens of a truly talented mind.
    </p>
  </div>
  
  {/* author image */}
  <div className="md:w-1/2 p-5 flex justify-center items-center">
    <img className='w-full rounded-lg' src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="author" />
  </div>
</section>

        {/* testimony */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
        <h1 className='text-3x1 font-bold'> TESTIMONIALS</h1>
        <h2 className='text-2x1'>See What Others Are Saying</h2>
        <div className='my-5 flex justify-center items-center flex-col'>
          {/* user image */}
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="user" />
          
          {/* feedback */}
          <p className='mt-5'>Lucas Alexander</p>
          <p className='text-justify mt-4'><span className='font-bold'>"Amazing Collection and Easy Navigation!"</span>   "I love how simple and smooth the shopping experience is. The categories, reviews, and recommendations helped me find exactly what I was looking for. I'll definitely be back for more books! My order arrived earlier than expected and the packaging was perfect. The books were in excellent condition, and I even got a discount on my purchase. Highly recommended!"</p>

        </div>

        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Home

