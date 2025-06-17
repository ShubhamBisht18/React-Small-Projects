import './App.css'
import UserFile from './pages/UserFile'
import UserDetail from './pages/UserDetail'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<UserFile/>}/>
        <Route path='/detail' element={<UserDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
