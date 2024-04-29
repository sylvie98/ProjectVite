import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
        <div  className=' bg-green-300 flex justify-center items-center flex-col p-3 h-[95vh] border border-red-600  w-full'>
            <h2>Signin Your Account</h2>
            <div className=' bg-yellow-100 h-[50vh] mt-10 rounded-2xl border border-blue-500'>
                <form className='flex flex-col gap-8 justify-center items-center mt-5 '>
                    <h3>LOGIN IN PAGE</h3>
                    <input type='email' name='email' placeholder='Email' value={""} className=' bg-pink-300 border border-blue-500 text-blue-500 rounded-lg  p-1'/>
                    <input type="password" name='password' placeholder='Password' value={""} className=' bg-pink-300 border border-blue-500 text-blue-600 rounded-lg p-1' />
                    <Link to={"/Home"}>
                    <button type='submit' className=' border border-blue-500 text-blue-500 bg-blue-400 rounded-lg p-1 w-48'>Sign in</button>
                    </Link>
                    <p>Already does not have an acccount ?
                        <Link to={"/Signup"} className=' text-red-400 hover:text-red-500 '>
                            sign up
                        </Link>
                    </p>
                    <div className='flex gap-5'>
                        <Link to={"/Forgetpassword"} className=' hover:text-red-500 text-blue-500'>Forgot password</Link>
                        <Link to={"/Resetpassword"} className=' hover:text-red-500 text-blue-500'>Reset password</Link> 
                        <Link to={"/Confirmation"} className=' hover:text-red-500 text-blue-500'>OTP</Link> 
                    </div>  
                </form>
            </div>
        </div>
        {/* <div className=' flex flex-col w-80 text-blue-500 gap-5 mt-1' >
            <Link to={"/Signup"} className='hover:text-red-500'>SIGN UP</Link>
            <Link to={"/Forgetpassword"} className=' hover:text-red-500'>FORGET PASSWORD</Link>
            <Link to={"/Resetpassword"} className=' hover:text-red-500'>RESET PASSWORD</Link>
            <Link to={"/Confirmation"} className=' hover:text-red-500'>CONFIRMATION</Link>   
        </div> */}
    </div>
  )
}

export default Signin