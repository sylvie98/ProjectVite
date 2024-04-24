import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Layout from './components/Layout'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Forgetpassword from './components/Forgetpassword'
import Resetpassword from './components/Resetpassword'
import Confirmation from './components/Confirmation'
import Otherpages from './components/Otherpages'

const App = () => {
  return (
    <Router>

      <Routes>
      <Route path='/' element={<Otherpages/>}>
      <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Forgetpassword' element={<Forgetpassword />} />
        <Route path='/Resetpassword' element={<Resetpassword />} />
        <Route path='/Confirmation' element={<Confirmation />} />
        </Route>
        {/* <Route path='/' element={<Signin/>}/> */}
        <Route path='/' element={<Layout/>}>
        <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contacts' element={<Contacts />} />
        </Route>
       

      </Routes>
    </Router>
  )
}

export default App
