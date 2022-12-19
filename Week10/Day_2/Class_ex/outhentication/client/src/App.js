import Nav from './components/Nav';
import LoginRegisterForm from './components/LoginRegisterForm';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
     <Nav />
     <Routes>
        <Route path='/login' element={<LoginRegisterForm  title='Login'/>} />
        <Route path='/register' element={<LoginRegisterForm title='Register'/>}  />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
