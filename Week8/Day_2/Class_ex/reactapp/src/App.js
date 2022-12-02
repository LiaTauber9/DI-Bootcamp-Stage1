import './App.css';
import User from './components/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Button } from 'bootstrap';
import Search from './components/Search';

// let userData = [
//   {id:1, name:'Jonn', userName:'jj', password:'jjj'},
//   {id:2, name:'Liron', userName:'ll', password:'lll'},
//   {id:3, name:'Dan', userName:'dd', password:'ddd'}
// ]

class App extends React.Component {
  constructor(){
    super()
    this.type = ''
    this.state = {
      tytle: 'User App',
      subtytle: 'My Robot User',
      userData: [],
      input:'',
      text: ''
    }
  }

  componentDidMount(){}  // optional

changeTytle = () => {
  this.setState({tytle: 'Robots App'})
}

 getUser = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data=>this.setState({userData:data}))
}
handleIinput = (event) =>{
  this.setState({type:event.target.value})
  // this.type = event.target.value
}
handleClick = () => {
  this.setState({text:this.state.type})
  // this.setState({text:this.type})
}

   render () {
    const {text} = this.state
    const filterUser = this.state.userData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    return (
      
      <div className="App">
         <h1>{this.state.tytle}</h1>
         <h2>{}</h2>
        <header className="App-header">
      {filterUser.map(item => <User name={item.name} userName={item.username} key={item.id} />)}
        </header>
        <div>
        <button onClick={this.changeTytle}>Change Tytle</button>
        <button onClick={this.getUser}>Get Usere</button>
        <Search input={this.handleIinput} click={this.handleClick} />
        {/* option 1 */}
        {/* <input type='text' onChange={(event)=> this.type = event.target.value}/>        
        <button onClick={()=>this.setState({text:this.type})}>Search</button>  */}
        {/* option 2  */}
         {/* <input type='text' onChange={(event)=> this.setState({input:event.target.value})}/>  */}      
        {/* <button onClick={()=>this.setState({text:this.state.input})}>Search</button>         */}
        </div>
      </div>
    );
  }
  
}

export default App;
