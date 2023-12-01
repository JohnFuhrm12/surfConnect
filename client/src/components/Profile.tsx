import '../styles/profile.css';
import Login from './Login';

function Profile( {...props} ) {
    return (
        <>
            {props.loggedIn? 
            <>
                <h1>Dashboard</h1>
                <h2>Welcome back {props.authedUsername}!</h2> 
                <h2>Role: {props.role}!</h2> 
                <h2>Name: {props.firstName} {props.lastName}</h2> 
            </>
            : 
            <Login {...props} />}
        </>
    )
}

export default Profile;