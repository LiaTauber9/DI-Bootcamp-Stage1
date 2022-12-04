import React from 'react'
import './App.css';
import Counter from './components/Counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {reducer} from './reducers';
const store = createStore(reducer);
 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
            <h1>Counter</h1>
            <Counter />
        </Provider>
      </header>
    </div>
  );
}

export default App;
