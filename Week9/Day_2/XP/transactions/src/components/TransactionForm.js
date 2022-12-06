import React from 'react'
import { connect } from 'react-redux'
import { insert } from '../redux/actions'
import TransactionList from './TransactionList'

class TransactionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                accountNumber:'',
                FSC:'',
                name:'',
                amount:''           
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()

        const list = [...this.props.list];
        const newTransaction = this.state;
        if(this.props.index<0){
            list.push(newTransaction)
        }else{
            list.splice(this.props.index,1,newTransaction)
        }
        
        this.setState(this.props.input)
        this.props.insert(list)
        console.log('list in store =>',this.props.list);
        
    }

    handleInputChange = (e) =>{
        console.log();
        const value = e.target.value
        const prop = e.target.name
        this.setState({[prop]:value})
    }

    updateInput = (transaction)=>{
        this.setState(transaction)
    }

    render(){
        const keys = [['accountNumber','Account Number'],['FSC','FSC'],['name','Name'],['amount','Amount']]
        return(
            <>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
            {
                keys.map((key,index)=>{
                    return(
                        <input key={index} name={key[0]} type='text' placeholder={key[1]} onChange={(e)=>this.handleInputChange(e)} value={this.state[key[0]]}/>
                    )                   
                })
            }
                {/* <input name='accountNumber' type='text' placeholder='Account Number' onChange={(e)=>this.handleInputChange(e)} value={this.state.accountNumber}/> */}
                <input type='submit' value='Submit' />
            </form>
            <TransactionList updateInput={this.updateInput}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        list: state.list,
        input: state.currentTransaction,
        index: state.index
    }
}

const mapDisfatchToProps = (dispatch) => {
    return{
        insert: (newList) => dispatch(insert(newList)) 
    }
    
}

export default connect(mapStateToProps, mapDisfatchToProps)(TransactionForm)