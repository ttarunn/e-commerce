import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main'

const Home = () => {
  return (
    <div className='w-full h-screen text-sm'>
        <Navbar />
        <Outlet/>
    </div>
  )
}

export default Home