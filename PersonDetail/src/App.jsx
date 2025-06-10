import './App.css'
import Home from './Pages/Home'
import PersonDetails from './Pages/PersonDetails'
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/api/:id' element={<PersonDetails/>} />
        </Routes>
    </div>
  )
}

export default App
