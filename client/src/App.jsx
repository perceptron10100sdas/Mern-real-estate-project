import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Creatlisting from './pages/Createlisting'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'


function App() {


  return (
    <>
      
     
       <BrowserRouter>
       <Header/>
       <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='/about' element={<About/>}/> 
       <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/listing/:listingId' element={<Listing/>} />
    
        <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>} />

        </Route>
        <Route path='/create-listing' element={<Creatlisting/>} />
        <Route path='/search' element={<Search/>} />
        <Route
            path='/update-listing/:listingId'
            element={< UpdateListing/>}
          />
       </Routes>
       </BrowserRouter>
      
     
    </>
  )
}

export default App
