import React from "react";
import { Input } from "./Input";

export class Form extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <form>
                <Input name='first' pHolder='First Name' />
                <Input name='last' pHolder='Last Name' />
                <Input name='phone' pHolder='Phon Number' />
                <Input name='email' pHolder='Email Adress' />
            </form>
        )
    }

}