import React from 'react';

export class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            isNum: true,
            textareaValue: 'enter text here',
            car:'volvo'
        }
    }

    handleInput = (event) => {
        this.setState({ name: event.target.value })
    }

    handleAge = (event) => {
        if (!/^\s*\d*\s*$/.test(event.target.value)) {
            // alert('enter only numbers');
            this.setState({ isNum: false });
        } else {
            this.setState({ isNum: true })
        }
    }

    handleTextarea = (event) => {
        this.setState({ textareaValue: event.target.value })
    }

    handleSelect = (event)=>{
        this.setState({car:event.target.value},()=>console.log('this.state.car=>',this.state.car));
    }

    submit = (event) => {
        event.preventDefault();
        alert(`You are submitting ${event.target.name.value}`);
        event.target.name.value = '';
    }

    render() {
        let header = '';
        if (this.state.name) {
            header = <h1>Hello {this.state.name}</h1>
        }
        return (
            <>
                {header}
                <form onSubmit={this.submit}>
                    <br />
                    <input name='name' onKeyUp={this.handleInput} placeholder='Enter your name:' />
                    <input name='age' onChange={this.handleAge} placeholder='Enter your age:' />
                    <input type='submit' name='submit' value='Submit' />
                    <p style={{ visibility: this.state.isNum ? 'hidden' : 'visible' }}>Age must be a number</p>
                    <textarea value={this.state.textareaValue} onChange={this.handleTextarea} />
                    <select defaultValue={this.state.car} onChange={this.handleSelect}>
                        <option value="volvo">Volvo</option>
                        <option value="fiat">Fiat</option>
                        <option value="ford">Ford</option>
                    </select>
                </form>
            </>
        )

    }
}