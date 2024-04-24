import React from 'react'
import { Link } from 'react-router-dom'
const Navabar = () => {
  return (
    <div className=' flex flex-col w-80 text-blue-500 gap-5' >
      <Link to={"/Home"} className=' hover:text-red-500'>Home</Link>
      <Link to={"/About"} className=' hover:text-red-500'>About</Link>
      <Link to={"/Contacts"} className=' hover:text-red-500'>contact</Link>
    </div>
  )
}

export default Navabar