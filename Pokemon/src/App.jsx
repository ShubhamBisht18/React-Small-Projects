import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Pokemon from './Pages/Pokemon'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pokemon/:id' element={<Pokemon/>}/>
    </Routes>
  )
}

export default App
