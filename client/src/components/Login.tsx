import '../styles/signupLogin.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login( {...props} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submitted');
        axios.post('http://localhost:3000/auth', {
            username: username,
            password: password
          })
          .then(function (response) {
            props.setAuthedUsername(response.data);
            console.log(response.data);
            console.log(`AUTHED_AS: ${props.authedUsername}`);
            props.setLoggedIn(true);
            console.log(props.loggedIn);
            navigate('/profile');
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <>
            <div id='signUpWrapper'>
                <h2 id="signUpTitle">Login To surfConnect</h2>
                <form id='signUpForm' onSubmit={handleSubmit}>
                    <input name='email' className='signUpInput' placeholder='youremail@gmail.com' onChange={(e) => {setUsername(e.target.value)}} value={username} required/>
                    <input name='password' className='signUpInput' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} value={password} required/>
                    <button type='submit' id='loginButton'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;