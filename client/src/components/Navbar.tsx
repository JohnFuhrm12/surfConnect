import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar( {...props} ) {
    function handleLogout() {
        props.setLoggedIn(false);
        props.setAuthedUsername('');
    }

    return (
        <>
            <div id='navWrapper'>
                <Link to='/' id='logoLink'>
                    <div id='logoWrapper'>
                        <h1 id='title'>surfConnect</h1>
                    </div>
                </Link>
                <div id='navLinksWrapper'>
                    <Link to='/photos' className='navLink'>Photos</Link>
                    {props.loggedIn? 
                    <>
                        <Link to='/' onClick={handleLogout} className='navLink'>Logout</Link>
                        <Link to='/profile'>
                            <i className="fa-solid fa-user"></i> 
                        </Link>
                    </>
                    : 
                    <>
                        <Link to='/login' className='navLink'>Login</Link>
                        <Link to='/signup' className='navLink'>Sign Up</Link>
                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;