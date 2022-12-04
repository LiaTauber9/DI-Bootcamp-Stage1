import {connect} from 'react-redux';
import { changePropTwo } from './actions';

const Child = (props) => {
  return (
    <>
      <h1>Child Component</h1>
      <div>{props.my_text_one}</div>
      <button onClick={props.buttonChange}>Change property two</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    my_text_one: state.property_one
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      buttonChange: () => dispatch(changePropTwo('changed'))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Child)