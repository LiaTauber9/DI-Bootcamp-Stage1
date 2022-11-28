import React, {Component} from 'react'

class User extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <li>{this.props.animal}</li>
    )
  }
}
export default User