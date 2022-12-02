import React from 'react';

class Appform extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            colorId: 0,
            isGo: false
        }
    }

    handleInput = (e) => {
        const val = e.target.type ==='checkbox' ? e.target.checked : e.target.value;
        this.setState({[e.target.name]: val})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.userName + " " + this.state.colorId+' is go? '+this.state.isGo )
    }
    

    render() {
        return (
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <input type='text' name='userName' onChange={this.handleInput} />
                <select name='colorId' onChange={this.handleInput}>
                    <option value='1'>Red</option>
                    <option value='2'>Green</option>
                    <option value='3'>Blue</option>
                </select>
                <input type='checkbox' name='isGo' onChange={this.handleInput} />
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default Appform