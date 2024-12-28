import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='top-0 p-5 flex relative items-center justify-between
     text-white bg-black'>
      <div className='flex justify-start'>
        <h1 className='text-2xl font-bold'>BlissedWraps</h1>
      </div>
      <div className='flex justify-end right-6 mr-5'>
        <Link href="/">
        <p className='text-xl'>Cart</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
