import {createContext, useState} from 'react'
import './App.css';
import Users from './components/Users';


export const AppContext = createContext(null);

function App() {
  const [name, setName] = useState('')
  return (
    <AppContext.Provider value={{name,setName}}>
    <div className="App">
      <Users />
    </div>
    </AppContext.Provider>
  );
}

export default App;
