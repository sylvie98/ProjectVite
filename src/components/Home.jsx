import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contacts from './Contacts'

const Home = () => {
  return (
        <div className='bg-red-300 w-full h-[90vh] p-3 border border-blue-500'>
            <div className='bg-green-300  p-5 w-full  border border-blue-500  rounded-2xl'>
                
                <p text>Jane Doe</p>
             </div>
             <section className=' flex mt-5'>
                <div className=' flex flex-col w-80 text-blue-500 '>
                <Link to={"/"} className='hover:text-red-500'>Home</Link>
                    <About/>
                    <Contacts/>
                 
                
                 
                </div>
                <div className=' bg-orange-200 h-[76vh] w-full border border-blue-500 rounded-2xl'>
                
                </div>
             </section>
            
            
        </div>
    )
}

export default Home