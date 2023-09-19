import '../styles/signupLogin.css';

function Login() {

    function handleSubmit() {
        console.log('Submitted');
    }

    return (
        <>
            <div id='signUpWrapper'>
                <h2 id="signUpTitle">Login To surfConnect</h2>
                <form id='signUpForm' onSubmit={handleSubmit}>
                    <input name='email' className='signUpInput' placeholder='youremail@gmail.com' required/>
                    <input name='password' className='signUpInput' placeholder='Password' required/>
                    <button type='submit' id='loginButton'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;