import React, { useState } from 'react';

export default function Confirmation(){
    
  const [otp, setOtp] = useState (new Array(4).fill(""))


  function handleChange (e,index){
    if(isNaN(e.target.value))
     return false;

    setOtp([...otp.map((data, indx) => (indx ===index? e.target.value:data))])

    if(e.target.value && e.target.nextSibling){
        e.target.nextSibling.focus()
      }
  }
  return (
    <div className=' bg-green-300 flex justify-center items-center flex-col p-3 h-[95vh] border border-red-600  w-full'>
       <h2>How to Create OTP Box With React</h2> 
       <div className='m-10 flex gap-10'>
       {
            otp.map((data, i)=>{
                return <input type ="text"
                 value={data}
                 maxLength={1}
                 onChange= {(e)=>handleChange(e, i)}
                 />;
            })
        }
       </div>
       <center>
         <button type="submit"
         onClick={()=>alert(otp.join(""))}
         >Submit</button></center>

    </div>
  )
}

