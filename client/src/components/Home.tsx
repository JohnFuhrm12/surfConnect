import '../styles/home.css';

function Home( {...props} ) {
    const testProp = props.test;
    
    function test() {
        console.log(testProp);
    }

    test();

    return (
        <>
            <div id='homeBackground'>
                <h2 id='backgroundTitle'>CONNECTING SURFERS TO SURF PHOTOGRAPHERS</h2>
            </div>
        </>
    )
}

export default Home;