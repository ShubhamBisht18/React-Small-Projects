import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FormPage from './components/FormPage';
import StorePage from './components/StorePage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/store' element={<StorePage />} />
      </Routes>
    </Router>
  )
}

export default App
