import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Layout from './components/Layout'
import Signin from './components/Signin'
import Signup from './components/Signup'

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
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
