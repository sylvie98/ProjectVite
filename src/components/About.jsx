import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <Link to={"/About"}>
          <a>About</a>
        </Link>
    </div>
  )
}

export default About