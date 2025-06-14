import React from "react"
import Home from './pages/Home'
import ItemPage from './pages/ItemPage'
import { Routes, Route } from "react-router-dom"
import { DataProvider } from "./context/DataContext"

function App() {

  return (
    <div>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/itempage" element={<ItemPage/>} />
        </Routes>
      </DataProvider>
    </div>
  )
}

export default App
