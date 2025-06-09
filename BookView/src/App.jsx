
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book/:id' element={<BookDetailPage/>}/>
    </Routes>
    </>
  )
}

export default App
