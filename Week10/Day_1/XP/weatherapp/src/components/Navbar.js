import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <nav>
            <button><Link to='/'>Home</Link></button>
            <button><Link to='/Favorites'>Favorites</Link></button>
        </nav>
    )
}
export default Navbar