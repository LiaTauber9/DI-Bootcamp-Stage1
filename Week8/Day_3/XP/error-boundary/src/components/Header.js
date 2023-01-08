import React from 'react'

export class Header extends React.Component {

    componentWillUnmount() {
        alert('The component named Header is about to be unmounted')
    }

    render(){
        return <h1>Hellow World!</h1>
    }
    
}