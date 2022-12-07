import React from 'react'
import { connect } from 'react-redux'
import { insert, update } from '../redux/actions'

class TransactionList extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    delete = (index) => {
        console.log(index);
        const list = [...this.props.list];
        list.splice(index, 1)
        console.log(list);
        this.props.insert(list)
    }

    update = (index) => {
        const currentTransaction = this.props.list[index];
        this.props.updateInput(currentTransaction)
        const list = [...this.props.list];
        this.props.update(list,index)
    }

    render(){
        return(
            <>
            <table>
                <tbody>
                {
                    this.props.list.map((item,index)=>{
                        return(
                            <tr key={index}>
                            <td>{item.accountNumber}</td>
                            <td>{item.FSC}</td>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td><button onClick={()=>{this.update(index)}}>Update</button></td>
                            <td><button onClick={()=>{this.delete(index)}}>Delete</button></td>
                        </tr>
                        )                    
                    })
                }
                </tbody>
            </table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        list: state.list
    }
}

const mapDisfatchToProps = (dispatch) => {
    return{
        insert: (newList) => dispatch(insert(newList)),
        update: (newList,index) => dispatch(update(newList,index)) 
    }
    
}

export default connect(mapStateToProps, mapDisfatchToProps)(TransactionList)