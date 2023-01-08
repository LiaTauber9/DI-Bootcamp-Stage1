import { BuggyCounter } from './components/BuggyCounter';
import { ErrorBoundary } from './ErrorBoundary';
import { Color } from './components/Color';
import { Delete } from './components/Delete';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter />
     </ErrorBoundary>
     <Color />
     <Delete />
    </div>
  );
}

export default App;
