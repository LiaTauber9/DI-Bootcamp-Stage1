import { connect } from 'react-redux';
import { search, SEARCH } from '../redux/actions';

// const Search = (props) => {
//     return(
//         <div>
//             <input type='text' onChange={props.handleSearch}/>
//         </div>
//     )
// }
// const mapDisfatchToProps = (dispatch) => {
//     return{
//         handleSearch: (e) => dispatch(search(e.target.value))
//     }
    
//   }
  
//   export default connect( mapDisfatchToProps)(Search);


//option 2 is doing the same

const Search = (props) => {
    return(
        <div>
            <input type='text' onChange={(e) => props.dispatch({type:SEARCH,payload:e.target.value})}/>
        </div>
    )
}

  
  export default connect()(Search);