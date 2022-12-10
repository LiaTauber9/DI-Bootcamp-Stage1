import{AGE_UP, AGE_DOWN, LOADING} from '../constants';
const initState = {
    age:20,
    isLoading:false
}

const reducer = (state=initState, action={})=>{
    switch(action.type){
        case LOADING: return{...state, isLoading:true};
        case AGE_UP: return{...state, age:state.age+=1, isLoading:false};
        case AGE_DOWN: return{...state, age:state.age-=1}
        default: return{...state}
    }
}

export default reducer