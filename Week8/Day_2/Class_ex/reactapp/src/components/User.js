import './User.css'
import Button from 'react-bootstrap/Button';
import React from 'react';


///option 1 with class
class User extends React.Component{
    constructor(){
        super();
        this.state = {
            // key: value,
            // another_key: another_value
        }
    }
    render(){
        const {name, userName, password, id} = this.props
            return(
            <div className='dib mar tac bor'>
                <img src={`https://robohash.org/${id}`} />
                <h1>Name: {name}</h1>
                <h2>User Name: {userName}</h2>
                <h2>Password: {password}</h2>
                <Button variant="warning">Display</Button>{' '}
            </div>
            )
    }
}


//// option 2 with function
// const User = (props) => {
//     const {name, userName, password, id} = props
//     return(
//     <div className='dib mar tac bor'>
//         <img src={`https://robohash.org/${id}`} />
//         <h1>Name: {name}</h1>
//         <h2>User Name: {userName}</h2>
//         <h2>Password: {password}</h2>
//         <Button variant="warning">Display</Button>{' '}
//     </div>
//     )
// }
export default User;