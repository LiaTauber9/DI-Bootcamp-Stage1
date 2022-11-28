import './App.css';
import User from './components/User';
import 'bootstrap/dist/css/bootstrap.min.css';

let userData = [
  {id:1, name:'Jonn', userName:'jj', password:'jjj'},
  {id:2, name:'Liron', userName:'ll', password:'lll'},
  {id:3, name:'Dan', userName:'dd', password:'ddd'}
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
    {userData.map(item => <User name={item.name} userName={item.userName} password={item.password} key={item.id} />)}
      </header>
    </div>
  );
}

export default App;
