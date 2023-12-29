import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <div className='bg-gradient-to-l from-pink-700 to-white p-3 flex justify-between '>
      <h1 className='text-3xl text-red-700 font-light bg-white rounded-md p-3'>BlushHavenHomes.com</h1>


  <form className=' flex items-center space-x-2' onSubmit={handleSubmit}>
      <input placeholder='enter the search content' className='p-3 rounded-md shadow-red-600 shadow-md'  value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
      <button><FaSearch className='mt-4 text-2xl text-white'/></button></form>
      

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
