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
            <div className='homeInfoBlock' id='homeBlocksCard'>
                <div className='homeInfoBlocks'>
                    <div className='homeInfoBlock' id='infoBlockCard'>
                        <div id='surfCardHome'>
                            <img id='surfCardIMG' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1695088385/surfConnect/k0ebju3pdsdkp1tikdb5.jpg'/>
                            <div id='surfCardHomeInfoWrapper'>
                                <h2 className='cardTitle'>Puerto Rico - Rincon</h2>
                            </div>
                        </div>
                    </div>
                    <div className='homeInfoBlock' id='homeBlockCardInfo'>
                        <h2 className='subtitleHome'>WELCOME TO THE BEST MARKETPLACE FOR SURF PHOTOS</h2>
                    </div>
                </div>
            </div>
            <div className='homeInfoBlock'>
                <div className='homeBlocks'>
                    <div className='homeBlock' id='surfersBlock'>
                        <h2 className='subtitleHomeSmall'>FOR <span className='subtitleHomeSmallBlue'>SURFERS</span></h2>
                        <h2 className='subtitleHomeSmaller'>Find Your Surf Photos</h2>
                        <h2 className='subtitleHomeSmaller'>Choose As Many Photos As You Like</h2>
                        <h2 className='subtitleHomeSmaller'>Connect With Photographers Pre or Post Session</h2>
                    </div>
                    <div className='homeBlock' id='photographersBlock'>
                        <h2 className='subtitleHomeSmall'>FOR <span className='subtitleHomeSmallBlue'>PHOTOGRAPHERS</span></h2>
                        <h2 className='subtitleHomeSmaller'>Upload Your Surf Photos</h2>
                        <h2 className='subtitleHomeSmaller'>Automatic Sales On All Photos</h2>
                        <h2 className='subtitleHomeSmaller'>Set Your Own Prices</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;