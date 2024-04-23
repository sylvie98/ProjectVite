import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Layout from './components/Layout'

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contacts' element={<Contacts />} />
        </Route>
          

      </Routes>
    </Router>
  )
}

export default App
