function Home( {...props} ) {
    const testProp = props.test;
    
    function test() {
        console.log(testProp);
    }

    test();

    return (
        <>
            <h1>surfConnect</h1>
        </>
    )
}

export default Home;