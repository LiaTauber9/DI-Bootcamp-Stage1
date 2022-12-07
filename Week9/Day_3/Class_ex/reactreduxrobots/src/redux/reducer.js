import {SEARCH, GET_ROBOT} from './actions'

const initState = {
    robots: [],
    text:''
}
export const reducer = (state = initState, action = {}) => {
    switch(action.type){
        case SEARCH:
            console.log(action.payload);
            return {...state, text:action.payload};
        case GET_ROBOT:
            console.log(action.payload);
            const filteredRobots = action.payload.filter(item=>item.name.toLowerCase().includes(state.text.toLowerCase()))
            return {...state, robots:filteredRobots}
        default: 
        return {...state}
    }
}