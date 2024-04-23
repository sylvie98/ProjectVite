import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contacts from './Contacts'

const Home = () => {
  return (
    <div>
         <Link to={"/"}> Home
        </Link>
        <About/>
        <Contacts/>
    </div>
  )
}

export default Home