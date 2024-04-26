import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.uname === '') {
      newErrors.uname = 'Please Enter your username';
    }
    if (formData.email === '') {
      newErrors.email = ' Please Enter your Email ';
    }
    if (formData.password ==='') {
      newErrors.password = ' Please Enter your  Password';
    }
    if (formData.password !== formData.confirmPassword)  {
      newErrors.confirmPassword = ' your Password not match';
    }
    else{
      newErrors.confirmPassword=" Confirm Your Password "
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
    
      setFormData({
        uname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    }
  };

  return (
    <div className='bg-green-300 flex justify-center items-center flex-col  h-[95vh] border border-red-600 w-full'>
      <div className='bg-yellow-100 h-[75vh]border border-blue-500  mb-0  space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-10'> 

            <form onSubmit={handleSubmit} className='flex flex-col gap-3 items-center'>
            <h3>REGISTRATION FORM</h3>
                <label className=' text-blue-600'>UserName:</label>
                <input type="text" name='uname' placeholder=' Enter  your Username' value={formData.uname} onChange={handleChange} className= "bg-pink-300 border border-blue-500 text-blue-500 rounded-lg text-lg "/>
                {errors.uname && <p className=' text-red-500'>{errors.uname}</p>}

                <label className='t text-blue-600'>Email:</label>
                <input type='email' name='email' placeholder=' Enter  your Email' value={formData.email} onChange={handleChange} className="bg-pink-300 border border-blue-500 text-blue-500 rounded-lg text-lg"/>
                {errors.email && <p className=' text-red-500'>{errors.email}</p>}
                
                <label className='t text-blue-600'>Password:</label>
                <input type="password" name='password' placeholder='Enter  your Password' value={formData.password} onChange={handleChange}  className="bg-pink-300 border border-blue-500 text-blue-600 rounded-lg text-lg"/>
                {errors.password && <p className=' text-red-500'>{errors.password}</p>}
                
                <label className='t text-blue-600'>Confirm Password:</label>
                <input type="password" name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange}  className="bg-pink-300 border border-blue-500 text-blue-600 rounded-lg text-lg"/>
                {errors.confirmPassword && <p className=' text-red-500 '>{errors.confirmPassword}</p>}
                
                <button type='submit' className='border border-blue-500 text-blue-500 bg-blue-400 rounded-lg  text-lg w-48'>Register</button>
                <p>Already have an account? <Link to={"/"} className='text-red-400 mb-16 '>Sign in</Link></p>
            </form>
            
      </div>
    </div>
  );
};

export default Signup;