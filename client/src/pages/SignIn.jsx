import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const[formData,setFormData]=useState({});
  const { loading, error } = useSelector((state) => state.user);

const navigate=useNavigate();
const dispatch = useDispatch();
const handleChange=(e)=>{
  
  setFormData({
    ...formData,[e.target.id]:e.target.value,
  })
}
const handleSubmit=async(e)=>
{
  e.preventDefault();
  try{
    dispatch(signInStart());
   
    const res=await fetch('/api/auth/signin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    });
    const data=await res.json();
    console.log(data);
    if(data.success===false)
    {
      dispatch(signInFailure(data.message));
      return;
    }dispatch(signInSuccess(data));;
    navigate('/')
  }catch(error)
  {
    dispatch(signInFailure(error.message));
  }
}
  return (
    <div>
      <div className='grid flex-col justify-center bg-gradient-to-br from-white to-pink-400'>
      <h1 className='text-5xl font-extralight text-center mt-7 bg-white p-3 rounded-lg  shadow-red-500 shadow-xl'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col  p-4 max-w-lg items-center rounded-lg space-y-5 mx-20 mt-6 '>
        <input placeholder='Enter your email id' className='text-2xl font-thin rounded-md p-1 shadow-white shadow-md' type='email'  id='email'onChange={handleChange}/>
        <input placeholder='Enter your password' className='text-2xl font-thin rounded-md p-1 shadow-white shadow-md' type='password' id='password' onChange={handleChange}/>
        <button disabled={loading} className='text-3xl bg-gradient-to-r from-white to-red-500 font-thin rounded-md shadow-white shadow-xl  items-center mt-3 mb-5 p-4'>
        {loading?'loading':'Sign In'}
        </button>
        <OAuth/>
      </form>
      <Link to={"/sign-up"}>
        <p className='text-2xl text-white overline mt-5'>Don't Have an Account!</p></Link>
      </div>
    </div>
  )
}
