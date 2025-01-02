import React from 'react'
import Landing from './components/Landing'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
  <>
  <Navbar/>
  <div>
  <Routes>
    <Route exact path="/" element={<Landing />} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/contact" element={<Contact/>} />
    {/* <Route exact path="/services" element={<Services/>} /> */}
  </Routes>
  </div>

  </>
  )
}

export default App
