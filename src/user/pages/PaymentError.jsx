import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentError() {
  return (
     <>
    <Header/>
    <div className='min-h-screen flex justify-center items-center md:px-20 px-5'>
        <div className="md:grid grid-cols-2 gap-10 items-center">
            <div>
                <h1 className="md:text-4xl text-red-600">Sorry!!! Payment Failed...</h1>
                <h2 className='my-10 md:text-xl'>We apologize for the inconviene caused and appreciate your visit to BookStore...</h2>
                <Link to={'/books'} className='flex items-center bg-red-600 p-2 w-60 text-white'> <FaBackward className='me-2'/> Explore More Books!!!</Link>
            </div>
            <div>
                <img src="https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif" alt="payment error" />
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentError