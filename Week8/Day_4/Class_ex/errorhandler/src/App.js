import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <ErrorBoundary>
          <Counter/>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
