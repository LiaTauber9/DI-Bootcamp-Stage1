import React from "react"

export class Input extends React.Component{
    constructor(props){
        super(props);
        this.emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.phonRegex=/^\d{10}$/;
        this.state = {
            val:'',
            displayReq:'none',
            displayVal:'none'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({val:event.target.value})
        if(event.target.value===''){
            this.setState({displayReq:'block'})
        }else{
            this.setState({displayReq:'none'})
        }
        
        if(event.target.name==='phone'){
            this.validate(event.target.value, this.phonRegex)
        }else if(event.target.name==='email'){
            this.validate(event.target.value, this.emailRegex)
        }
    }

    validate(input, regex){
        const isvaild = regex.test(input)
        if(!isvaild){
            this.setState({displayVal:'block'})
        }else{
            this.setState({displayVal:'none'}) 
        }
    }
    

    render(){
        return(
            <>
            <input name={this.props.name} onChange={this.handleChange} placeholder={this.props.pHolder} value={this.state.val}/>
            <p style={{display:this.state.displayReq}}>{this.props.pHolder} is required</p>
            <p style={{display:this.state.displayVal}}>{this.props.pHolder} is invalid</p>
            <br />
            </>
        )
    }
    
}