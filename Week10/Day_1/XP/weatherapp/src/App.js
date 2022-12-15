import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import { useState, createContext } from 'react';

export const AppContext = createContext(null)

function App() {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [cityKey, setCityKey] = useState('');

  return (
    <div className='App'>
      <BrowserRouter>
        <AppContext.Provider value={{ city, setCity, country, setCountry, cityKey, setCityKey }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Favorites' element={<Favorites />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
