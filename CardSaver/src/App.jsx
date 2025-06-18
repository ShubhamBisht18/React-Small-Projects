import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SavedCards from './pages/SavedCards';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/saved' element={<SavedCards />} />
    </Routes>
  );
}

export default App;