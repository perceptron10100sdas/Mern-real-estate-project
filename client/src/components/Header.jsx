import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-gradient-to-l from-pink-700 to-white p-3 flex justify-between '>
      <h1 className='text-3xl text-red-500 font-bold'>magicBricks</h1>

<div className='flex space-x-2 mb-3'>
      <input placeholder='enter the search content' className='p-3 rounded-md shadow-red-600 shadow-md'/>
      <FaSearch className='mt-4 text-2xl text-white'/></div>
      

<div className='flex justify-end space-x-4'>
<Link to="/"><h2 className='bg-white p-2 rounded-md text-red-600 font-semibold  shadow-pink-500 shadow-md'>Home</h2></Link>
      <Link to="/about"><h2 className='bg-white p-2 rounded-md text-red-600 font-semibold shadow-pink-500 shadow-md'>About </h2></Link>
      <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
            ) : (
              <li className='bg-white p-2 rounded-md text-red-600 font-semibold shadow-pink-500 shadow-md'> Sign in</li>
            )}
          </Link>
      
      </div>
    </div>
  )
}
