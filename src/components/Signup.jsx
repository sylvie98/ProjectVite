import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
   < div  className=' bg-green-300 flex justify-center items-center flex-col p-3 h-[95vh] border border-red-600  w-full'>
        <div className=' bg-yellow-100 h-[50vh] w-80 rounded-lg border border-blue-500'>
            <form className='flex flex-col gap-8 justify-center items-center'>
                <h3>REGISTRATION FORM</h3>
                <input type='email' name='email' placeholder='Email' value={""} className=' bg-pink-300 border border-blue-500 text-blue-500 rounded-lg  p-1'/>
                <input type="password" name='password' placeholder='Password' value={""} className=' bg-pink-300 border border-blue-500 text-blue-600 rounded-lg p-1' />
                <input type="password" name='confirmpassword' placeholder='Confirm Password' value={""} className=' bg-pink-300 border border-blue-500 text-blue-600 rounded-lg p-1' />
                <Link to={"/"}>
                <button type='submit' className=' border border-blue-500 text-blue-500 bg-blue-400 rounded-lg p-1 w-48'>Register</button>
                </Link>
                <p>Already you have an acccount ?
                    <Link to={"/"} className=' text-red-400 '>
                        sign in
                    </Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Signup