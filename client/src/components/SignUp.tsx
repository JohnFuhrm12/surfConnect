import { useState } from 'react';
import '../styles/signupLogin.css';
import axios from 'axios';

function SignUp( {...props} ) {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('Surfer');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const testProp = props.test2;
    
    function test() {
        console.log(testProp);
    }

    test();

    function handleSubmit() {
        axios.post('http://localhost:3000/users', {
            username: email,
            password: password,
            role: role
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <>
            <div id='signUpWrapper'>
                <h2 id="signUpTitle">Create Your Free surfConnect Account</h2>
                <form id='signUpForm' onSubmit={handleSubmit}>
                    <input name='firstName' className='signUpInput' placeholder='First Name' onChange={(e) => {setFirstname(e.target.value)}} value={firstName} required/>
                    <input name='lastName' className='signUpInput' placeholder='Last Name' onChange={(e) => {setLastName(e.target.value)}} value={lastName} required/>
                    <select name='role' className='signUpSelect' onChange={(e) => {setRole(e.target.value)}}>
                        <option value='Surfer' className='option'>Surfer</option>
                        <option value='Photographer' className='option'>Photographer</option>
                    </select>
                    <input name='email' className='signUpInput' placeholder='youremail@gmail.com' onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                    <input name='password' className='signUpInput' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} value={password} required/>
                    <button type='submit' id='signUpButton'>Create Account</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;