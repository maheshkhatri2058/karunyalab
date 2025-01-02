import React from 'react'
import Landing from './components/Landing'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
  <>
  <Navbar/>
  <div>
  <Routes>
    <Route exact path="/" element={<Landing />} />
  </Routes>
  </div>

  </>
  )
}

export default App
