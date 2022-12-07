import React from 'react';
import Robots from './components/Robots';
import './App.css';
import 'tachyons';
import Search from './components/Search';
import { connect } from 'react-redux';
import { getRobots } from './redux/actions'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      text:''
    }
  }

  componentDidMount() {
    this.props.getRobots()
  }

    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(result => result.json())
    // .then(data => {
    //   // this.setState({robots: data})
    //   this.props.getRobots(data)
    // })
    // .catch(err => console.log(err))
  


  render() {
    const {robots,text} = this.props;
    console.log('this.props.text',this.props.text);
    const filteredRobots = robots.filter(item=>item.name.toLowerCase().includes(text.toLowerCase())) 
    return (
      <div>
        <Search />
        {
          filteredRobots.map(element => {
            return (
              <Robots robot={element} key={element.id}/>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    robots:state.robots,
    text:state.text
  }
}

const mapDisfatchToProps = (dispatch) => {
  return{
      getRobots: () => dispatch(getRobots())
  }
  
}

export default connect(mapStateToProps, mapDisfatchToProps)(App);