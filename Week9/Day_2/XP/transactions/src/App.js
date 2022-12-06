
import './App.css';
import React from 'react'
import {connect} from 'react-redux';
import TransactionForm from './components/TransactionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Transactions</h1>
        <TransactionForm />
      </header>
    </div>
  );
}

export default App;
