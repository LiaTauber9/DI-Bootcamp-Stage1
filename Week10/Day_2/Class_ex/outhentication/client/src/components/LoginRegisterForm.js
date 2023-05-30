import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect,useContext} from 'react';
import AppContext from '../App';

const LoginRegisterForm = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const setToken = useContext(AppContext);

    const navigate = useNavigate();

    const handleClick = async() =>{
        if(props.title === 'Login'){
            try{
                const response = await axios('/login',
                {email,password},
                {Headers:{'Content-Type':'application/json'}}
                )
                setToken(response.data.token);
                setMsg('');
                navigate('/home')
            }catch(er){setMsg(er.response.data.msg)}
        }else{

        }
    }

    return(
        <div>
        <h3>{props.title} Form</h3>
        <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
            <TextField 
            sx={{m:1}} 
            id='email' 
            label='Emter Email' 
            variant='outlind' 
            onChange={(ev)=>setEmail(ev.target.value)} />
            <TextField 
            sx={{m:1}} 
            id='password' 
            label='Emter Password' 
            variant='outlind' 
            onChange={(ev)=>setPassword(ev.target.value)} />
        </Box>
        <Button variant='contained' onClick={handleClick}>{props.title}</Button>
        <div>
            {msg}
        </div>
        </div>
    )
}

export default LoginRegisterForm