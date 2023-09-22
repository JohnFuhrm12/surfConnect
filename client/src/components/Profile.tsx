import '../styles/profile.css';
import Login from './Login';

function Profile( {...props} ) {
    return (
        <>
            {props.loggedIn? 
            <h2>Hello {props.authedUsername}!</h2> 
            : 
            <Login {...props} />}
        </>
    )
}

export default Profile;