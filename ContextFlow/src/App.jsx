import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Card from './components/card'
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <div>
      <DataProvider>
        <Home />
        <Card />
      </DataProvider>
    </div>
  )
}

export default App
