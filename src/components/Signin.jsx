import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div  className=' bg-green-300 flex justify-center items-center flex-col p-3 h-[55vh] border border-red-600 rounded-lg w-full'>
        <h2>LOGO HERE</h2>
        <div className=' bg-orange-200 h-[45vh] mt-10'>
            <form className='flex flex-col gap-8 justify-center items-center mt-5 '>
                <h3>SIGN IN</h3>
                <input type='email' name='email' placeholder='Email' value={""} className=' bg-pink-300 border border-blue-500 text-blue-500 rounded-lg  p-1'/>
                <input type="password" name='password' placeholder='Password' value={""} className=' bg-pink-300 border border-blue-500 text-blue-600 rounded-lg p-1' />
                <Link to={"/Home"}>
                <button type='submit' className=' border border-blue-500 text-blue-500 bg-blue-400 rounded-lg p-1 w-48'>Sign in</button>
                </Link>
                <p>Already does not have an acccount ?
                    <Link to={"/Signup"} className=' text-red-400 '>
                        sign up
                    </Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Signin