import {useContext, useEffect} from 'react';
import { AppContext } from '../App';

const Child = ()=>{
    const {name, setName} = useContext(AppContext);
    useEffect(()=>setName('name from child'),[]);  
    return(
        <h1>Name: {name}</h1>
    )
}

export default Child