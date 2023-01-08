import React from 'react';
import { Header } from './Header';

export class Delete extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    
    render() {


        if (this.state.show) {
            return (
                <div>
                    <Header />
                    <button onClick={() => this.setState({ show: false })}>Delete Header</button>
                </div>)
        }

        return (
            <div>
                <button onClick={() => this.setState({ show: true })}>show Header</button>
            </div>)
    }


}