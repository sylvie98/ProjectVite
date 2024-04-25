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
      newErrors.uname = 'Username is required';
    }
    if (formData.email === '') {
      newErrors.email = 'Email is required';
    }
    if (formData.password ==='') {
      newErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      <div className='bg-yellow-100 h-[75vh] w-[50vh] rounded-lg border border-blue-500'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-10 justify-center items-center'>
                <h3>REGISTRATION FORM</h3>
                {errors.uname && <p>{errors.uname}</p>}
                <input type="text" name='uname' placeholder='Username' value={formData.uname} onChange={handleChange} className= "bg-pink-300 border border-blue-500 text-blue-500 rounded-lg "/>

                {errors.email && <p>{errors.email}</p>}
                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className="bg-pink-300 border border-blue-500 text-blue-500 rounded-lg"/>
                
                {errors.password && <p>{errors.password}</p>}
                <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange}  className="bg-pink-300 border border-blue-500 text-blue-600 rounded-lg"/>
                
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                <input type="password" name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange}  className="bg-pink-300 border border-blue-500 text-blue-600 rounded-lg"/>
                
                <button type='submit' className='border border-blue-500 text-blue-500 bg-blue-400 rounded-lg  w-48'>Register</button>
                <p>Already have an account? <Link to={"/"} className='text-red-400 mb-16'>Sign in</Link></p>
            </form>
            
      </div>
    </div>
  );
};

export default Signup;