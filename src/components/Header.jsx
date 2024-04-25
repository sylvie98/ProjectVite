import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-green-300  p-5 w-full  border border-blue-500  rounded-2xl flex justify-around'>          
        <p text>Jane Doe</p>
        <Link to={"/"}>
          <button className='rounded-lg border border-blue-500'>LOGOUT</button>
        </Link>
    </div>
  )
}

export default Header