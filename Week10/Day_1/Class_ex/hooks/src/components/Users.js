import {useState, useEffect, useContext} from 'react'
import { AppContext } from '../App'
import Child from './Child';

const Users = () => {
    const {name, setName} = useContext(AppContext);
    const [users, setUsers] = useState([]);

    useEffect(()=>setName('Robots'),[])

    useEffect(()=>{
        const getData = async()=>{
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
                console.log(data);
                // fetch('https://jsonplaceholder.typicode.com/users')
                // .then(data => data.json())
                // .then(data => setUsers(data))
            }
            catch(e){console.log(e)}
        }
    getData()   
    },[])

    return(
        <>
        <h1>{name}</h1>
        <Child />
        {users.map((item,index) => {return <div key={index}>Name: {item.name} Username: {item.username} Email:{item.email}</div>})}
        </>
    )
}
export default Users