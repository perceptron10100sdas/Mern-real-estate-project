import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';


export default function Header() {
  return (
    <div className='bg-gradient-to-l from-pink-700 to-white p-3 flex justify-between '>
      <h1 className='text-3xl text-red-500 font-bold'>ASPIRE</h1>

<div className='flex space-x-2'>
      <input placeholder='enter the search content' className='p-3 rounded-md shadow-red-600 shadow-xl'/>
      <FaSearch className='mt-4 text-2xl text-white'/></div>
      

<div className='flex justify-end space-x-4'>
<Link to="/"><h2 className='bg-white p-2 rounded-md text-red-600 font-semibold  shadow-pink-500 shadow-md'>Home</h2></Link>
      <Link to="/about"><h2 className='bg-white p-2 rounded-md text-red-600 font-semibold shadow-pink-500 shadow-md'>About </h2></Link>
      <Link to="/sign-in"><h2 className='bg-white p-2 rounded-md text-red-600 font-semibold  shadow-pink-500 shadow-md'>Sign In</h2></Link>
      
      </div>
    </div>
  )
}
