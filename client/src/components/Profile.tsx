import '../styles/profile.css';
import Login from './Login';

function Profile( {...props} ) {
    return (
        <>
            {props.loggedIn? 
            <>
                <h1>Dashboard</h1>
                <h2>Welcome back {props.firstName}!</h2> 
                <div id='dashboardContainer'>
                    <div id='profileInfo'>
                        <img id='profilePicture' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1701463466/surfConnect/hhfnik5aghesyxzb25fe.png' alt='Profile'/>
                        <h2 className='profileHeader'>{props.firstName} {props.lastName}</h2> 
                        <h2 className='profileHeader' id='roleTitle'>{props.role}</h2>
                    </div>
                    <div id='purchasesContainer'>
                        <h2 className='profileHeader'>Recent Purchases</h2>
                    </div>
                    <div id='editsContainer'>
                        <button className='profileEditButton'>Edit Profile</button>
                    </div>
                </div>
            </>
            : 
            <Login {...props} />}
        </>
    )
}

export default Profile;