import { connect } from "react-redux"
const Increase = (props) => {
    return(
        <button onClick={() => props.dispatch({type:'INCREASE_COUNT'})}>+</button>
    )
}
export default connect()(Increase)