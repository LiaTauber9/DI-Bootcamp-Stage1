import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Nav = ()=>{
    return(
        <nav>
        <button><Link to='/login'>Login</Link></button>
        <button><Link to='/register'>Register</Link></button>
        </nav>
    )
}

export default Nav