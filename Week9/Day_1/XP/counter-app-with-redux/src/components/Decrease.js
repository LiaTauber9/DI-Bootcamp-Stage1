import { connect } from "react-redux"
const Decrease = (props) => {
    return(
        <button onClick={()=> props.dispatch({type:'DECREASE_COUNT'})}>-</button>
    )
}
export default connect()(Decrease)