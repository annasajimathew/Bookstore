import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div className='h-screen flex justify-center flex-col items-center'>
      <img width={'20%'} src="https://assets.dochipo.com/editor/animations/404-error/34436078-a766-4673-b05a-1a30bdf86537.gif" alt="pnf" />
      <p>Oh... No!!!</p>
      <h1 className="text-black text-2xl">LookS Like You're Lost</h1>
      <p>The page you are searchinh is not available</p>
      <Link to={'/'} className='bg-black py-2 px-3 rounded my-3 text-white'>Back Home</Link>
    </div>
  )
}

export default Pnf