function SignUp( {...props} ) {
    const testProp = props.test2;
    
    function test() {
        console.log(testProp);
    }

    test();

    return (
        <>
            <h1>Sign Up</h1>
        </>
    )
}

export default SignUp;