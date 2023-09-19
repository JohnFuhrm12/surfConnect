import '../styles/signupLogin.css';

function SignUp( {...props} ) {
    const testProp = props.test2;
    
    function test() {
        console.log(testProp);
    }

    test();

    function handleSubmit() {
        console.log('Submitted');
    }

    return (
        <>
            <div id='signUpWrapper'>
                <h2 id="signUpTitle">Create Your Free surfConnect Account</h2>
                <form id='signUpForm' onSubmit={handleSubmit}>
                    <input name='firstName' className='signUpInput' placeholder='First Name' required/>
                    <input name='lastName' className='signUpInput' placeholder='Last Name' required/>
                    <select name='role' className='signUpSelect'>
                        <option value='Surfer' className='option'>Surfer</option>
                        <option value='Photographer' className='option'>Photographer</option>
                    </select>
                    <input name='email' className='signUpInput' placeholder='youremail@gmail.com' required/>
                    <input name='password' className='signUpInput' placeholder='Password' required/>
                    <button type='submit' id='signUpButton'>Create Account</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;