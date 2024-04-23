import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <Link to={"/About"} className='hover:text-red-500'>About</Link>
    </div>
  )
}

export default About