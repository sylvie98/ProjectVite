import React from 'react'
import { Outlet } from 'react-router-dom'
import Navabar from './Navabar'
import Header from './Header'

const Layout = () => {
  return (
    <div className='bg-red-300 w-full h-[90vh] p-3 border border-blue-500'>
        <Header/>
        <div className=' flex mt-5 md:flex-row sm:flex-col'>
        <Navabar/>
        <Outlet/>
        </div>
    </div>

  )
}

export default Layout