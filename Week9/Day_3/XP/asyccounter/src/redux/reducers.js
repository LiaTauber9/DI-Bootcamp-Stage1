// import {combineReducers} from 'redux';
import {INCREMENT,DECREMENT} from './actions';
// import {reducer_robots} from './reducerRobots'

const initState = {
  num:0,
  age:20
}


const reducer = (state= initState, action={}) => {
  const target = action.payload
  switch(action.type){
    case INCREMENT: return{...state, [target]:state[target]+=1};
    case DECREMENT: return{...state, [target]:state[target]-=1};
    default: return{...state}
  }

}

export default reducer


// export const rootReducer = combineReducers({
//   reducer_seacrh,
//   reducer_robots
// })
// export default rootReducer
