import React, {Component} from 'react'

const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5;


class Hello extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
            <h1>Hello World</h1>
            <h1>I do not use JSX</h1>
            {myelement}
            <p>React is {sum} times better with JSX</p>
            </div>
                )
    }
}

// const Hello = () => {
//     return(
//         <div>
//         <h1>Hello World</h1>
//         <h1>I do not use JSX</h1>
//         {myelement}
//         <p>React is {sum} times better with JSX</p>
//         </div>
//     )
// }
export default Hello