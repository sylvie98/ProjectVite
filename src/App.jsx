import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <>
    <Router>
   
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      
     </Routes>
    </Router>  
    </>
  )
}

export default App
