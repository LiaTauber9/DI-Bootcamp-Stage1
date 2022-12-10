import { connect } from 'react-redux';
import {add,sub,addAge,subAge,addIfOdd,asyncAdd} from '../redux/actions'

const Counter = (props) => {
    return(
        <div>
            <h1>Counter</h1>
    <p>Clicked:<span>{' '+props.num+' '}</span>times</p>
    <button onClick={props.addNum}>+</button>
    <button onClick={props.subNum}>-</button>
    <button onClick={props.addIfOdd}>Increment if odd</button>
    <button onClick={props.asyncAdd} >Increment async</button>
    <br/>
    <h1>Age Counter</h1>
    <p>Your age: <span>{' '+props.age}</span></p>
    <button onClick={props.addAge}>Age Up</button>
    <button onClick={props.subAge}>Age Down</button>
    </div>
    )
    
}



const mapStateToProps = (state)=>{
    return{
        num:state.num,
        age:state.age
    }
}

const mapDisfatchToProps = (dispatch)=>{
    return{
        addNum:()=>dispatch(add()),
        subNum:()=>dispatch(sub()),
        addIfOdd:()=>dispatch(addIfOdd()),
        asyncAdd:()=>dispatch(asyncAdd()),
        addAge:()=>dispatch(addAge()),
        subAge:()=>dispatch(subAge()),

    }
}

export default connect(mapStateToProps,mapDisfatchToProps)(Counter)
