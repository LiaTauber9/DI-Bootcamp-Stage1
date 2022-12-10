import{AGE_UP, AGE_DOWN, LOADING} from '../constants';


export const ageDown = ()=>{return {type: AGE_DOWN}}

const ageUpAsnc = ()=>{
    return new Promise((res,err)=>{
        setTimeout(()=>{
            res({type: AGE_UP})
        },5000)
    })
}

export const ageUp = ()=>(dispatch)=>{
    dispatch({type: LOADING});
    ageUpAsnc()
    .then(res=>{dispatch(res)})
}