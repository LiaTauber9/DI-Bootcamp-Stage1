import React from "react";

export class Wellcome extends React.Component{
    constructor(){
        super();
        this.state = {
            first:'',
            last:'',
            phone:'',
            email:'',
            isSubmit:false
        }
        this.submit = this.submit.bind(this);
    }

    // submit(event){
    //     event.preventDefault();
    //     // console.log(event.target.title.value);
    //     this.setState({
    //         first:event.target.first.value,
    //         last:event.target.last.value,
    //         phone:event.target.phone.value,
    //         email:event.target.email.value,
    //         isSubmit:true
    //     },()=>console.log(this.state))
    // }

    submit(event){
        event.preventDefault();
        this.setState({isSubmit:true},()=>console.log(this.state))
    }

    onInput=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    // reset=(event)=>{
    //     event.preventDefault();
    //     this.setState({isSubmit:false})
    // }

    reset=(event)=>{
        event.preventDefault();
        this.setState({
            first:'',
            last:'',
            phone:'',
            email:'',
            isSubmit:false
        })
    }

    render(){
        if(this.state.isSubmit===false){
            // return(
            //     <form onSubmit={this.submit}>
            //      <h1>Wellcome!</h1>
            //      <p>Please provide your information below.</p>
            //      <input name="first" placeholder="First Name" />
            //      <input name="last" placeholder="Last Name"/>
            //      <input name="phone" placeholder="Phone Number"/>
            //      <input name="email" placeholder="Email Adress"/>
            //      <input type='submit' value='Submit'/>
            //     </form> 
            //  )
            return(
                <form onSubmit={this.submit}>
                 <h1>Wellcome!</h1>
                 <p>Please provide your information below.</p>
                 <input name="first" placeholder="First Name" value={this.state.first} onChange={this.onInput}/>
                 <input name="last" placeholder="Last Name" value={this.state.last} onChange={this.onInput}/>
                 <input name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.onInput}/>
                 <input name="email" placeholder="Email Adress" value={this.state.email} onChange={this.onInput}/>
                 <input type='submit' value='Submit'/>
                </form> 
             )
        }else{
            console.log("else mode");
            const{first,last,phone,email} = this.state
            return(
               <form onSubmit={this.reset}>
                    <p>{first},{last}</p>
                    <p>{phone} | {email}</p>
                    <input type='submit' value='Reset'/>
               </form>
            )
        }
       
    }
}