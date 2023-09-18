import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div id='navWrapper'>
                <Link to='/' id='logoLink'>
                    <div id='logoWrapper'>
                        <h1 id='title'>surfConnect</h1>
                    </div>
                </Link>
                <div id='navLinksWrapper'>
                    <Link to='/login' className='navLink'>Login</Link>
                    <Link to='/signup' className='navLink'>Sign Up</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;