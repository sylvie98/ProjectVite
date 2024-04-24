import React from 'react'
import { Link } from 'react-router-dom'
const Resetpassword = () => {
  return (
    <div>
        <div className=' bg-orange-200 h-[45vh] w-80'>
            <form className='flex flex-col gap-8 justify-center items-center'>
                <h3>RESET PASSWORD</h3>
                <input type='email' name='email' placeholder='Email' value={""} className=' bg-pink-300 border border-blue-500 text-blue-500 rounded-lg  p-1'/>
                <input type="password" name='password' placeholder='Password' value={""} className=' bg-pink-300 border border-blue-500 text-blue-600 rounded-lg p-1' />
                <Link to={"/"}>
                <button type='submit' className=' border border-blue-500 text-blue-500 bg-blue-400 rounded-lg p-1 w-48'>RESET</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Resetpassword