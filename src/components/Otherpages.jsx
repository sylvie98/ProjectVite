import React from 'react'
import Signin from './Signin'
import { Outlet } from 'react-router-dom'

const Otherpages = () => {
  return (
    <div className>
        {/* <Signin/>
        <div className ="flex justify-center "> */}
        <Outlet/>
        {/* </div> */}
    </div>
  )
}

export default Otherpages