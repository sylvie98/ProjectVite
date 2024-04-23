import React from 'react'
import { Link } from 'react-router-dom'
const Contacts = () => {
  return (
    <div>
          <Link to={"/Contacts"} className='hover:text-red-500'>Contact</Link>
    </div>
  )
}

export default Contacts