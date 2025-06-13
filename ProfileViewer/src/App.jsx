
import './App.css'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <div>
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/detail' element={<Detail/>} />
        </Routes>
      </DataProvider>
      
    </div>
  )
}

export default App
