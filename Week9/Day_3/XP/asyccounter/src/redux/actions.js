export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_AGE = 'INCREMENT_AGE';
export const DECREMENT_AGE = 'DECREMENT_AGE';

export const add = () => {
    return {
        type:INCREMENT,
        payload:'num'
    }
}

export const sub = () => {
    return {
        type:DECREMENT,
        payload:'num'
    }
}

export const addIfOdd = () => (dispatch,getState) => {
    if(getState().num%2!==0){
        dispatch( {
            type:INCREMENT,
            payload:'num'
        })
}
}

export const asyncAdd = () => (dispatch,getState) => {
    setTimeout(dispatch,1000, {type:INCREMENT,payload:'num'})
} 
   

export const addAge = () => {
    return {
        type:INCREMENT,
        payload:'age'
    }
}

export const subAge = () => {
    return {
        type:DECREMENT,
        payload:'age'
    }
} 


//option 2 - middleware with thunk:

// export const addAge =  () => (dispatch,getState) => {
//     dispatch({
//         type:INCREMENT,
//         payload:'age'
//     })
//     console.log('middleware with thunk:  age: ',getState().age);
// }

// export const subAge = () => (dispatch,getState) => {
//     dispatch({
//         type:DECREMENT,
//         payload:'age'
//     })
//     console.log('middleware with thunk:  age: ',getState().age);
// } 

