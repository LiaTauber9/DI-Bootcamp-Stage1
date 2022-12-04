import React from 'react'
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import {connect} from 'react-redux';
import { reducer } from './reducer/moviesReducer';
import Movies from './components/Movies';

const store = createStore(reducer);
 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
            <Movies />
        </Provider>
      </header>
    </div>
  );
}

export default App;
