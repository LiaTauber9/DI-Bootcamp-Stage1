import React from 'react'
import Child from './Child'
import {connect} from 'react-redux';
import './App.css';
import {changePropOne} from './actions'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      property_one:'text 1',
      property_two:'text 2'
    }
  }

  handleChange = (e) => {
    this.setState({property_one:e.target.value})
  }

  render(){
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h2>Simple Redux Example</h2>
          <div>Property one: {this.state.property_one}</div>
          <input type="text" onChange={this.handleChange}/>
          {/* <input type="text" onChange={this.props.myChange}/> */}

          <div>Property one from store: {this.props.my_one} </div>
          <input type='text' onChange={this.props.myChange}/>

          {/* <div>Property two: {this.state.property_two}</div> */}
          <div>Property two: {this.props.my_two}</div>
          <Child/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    my_one: state.property_one,
    my_two:state.property_two
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myChange: (e) => dispatch(changePropOne(e.target.value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);