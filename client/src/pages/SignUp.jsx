import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div  className=''>
    <div className='grid flex-col justify-center bg-gradient-to-br from-white to-pink-400'>
        <h1 className='text-5xl font-extralight text-center mt-7 bg-white p-3 rounded-lg  shadow-red-500 shadow-xl'>Sign up </h1>
        <form className='flex flex-col  p-4 max-w-lg items-center rounded-lg space-y-5 mx-20 mt-6 '>
            <input placeholder='Enter your name ' className='text-2xl font-thin rounded-md p-1 shadow-white shadow-md'/>
            <input placeholder='Enter your email  ' className='text-2xl font-thin rounded-md p-1 shadow-white shadow-md'/>
            <input placeholder='Enter your password 'className='text-2xl font-thin rounded-md p-1 shadow-white shadow-md'/>

        </form>
    
        <button className='text-3xl bg-gradient-to-r from-red-600 to-purple-500 bg-clip-text text-transparent items-center mt-3 mb-5'>Sign up </button>
        <Link to={"/sign-in"}>
        <p className='text-2xl text-white overline'>Have an Account!</p>

    </Link>
    </div>
   
    
    
    </div>
   
  )
}
