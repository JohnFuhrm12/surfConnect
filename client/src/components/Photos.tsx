import '../styles/photos.css';

function Photos( {...props} ) {
    const testPhotos = [
        {
            title: 'Arpoador - Rio',
            url: 'https://res.cloudinary.com/dvmw658s9/image/upload/v1695087359/surfConnect/dij5ykhsupnyjckgpn0c.jpg',
            locationCountry: 'Brazil',
            locationCity: 'Rio de Janeiro',
            locationSpot: 'Arpoador'
        }, {
            title: 'Waikiki - Hawaii',
            url: 'https://res.cloudinary.com/dvmw658s9/image/upload/v1695087173/surfConnect/na78e623tvkorxwwx2f6.jpg',
            locationCountry: 'USA',
            locationCity: 'Honolulu',
            locationSpot: 'Waikiki'
        }, {
            title: 'Arpoador - Rio',
            url: 'https://res.cloudinary.com/dvmw658s9/image/upload/v1695087359/surfConnect/dij5ykhsupnyjckgpn0c.jpg',
            locationCountry: 'Brazil',
            locationCity: 'Rio de Janeiro',
            locationSpot: 'Arpoador'
        }, {
            title: 'Waikiki - Hawaii',
            url: 'https://res.cloudinary.com/dvmw658s9/image/upload/v1695087173/surfConnect/na78e623tvkorxwwx2f6.jpg',
            locationCountry: 'USA',
            locationCity: 'Honolulu',
            locationSpot: 'Waikiki'
        }, {
            title: 'Waikiki - Hawaii',
            url: 'https://res.cloudinary.com/dvmw658s9/image/upload/v1695087173/surfConnect/na78e623tvkorxwwx2f6.jpg',
            locationCountry: 'USA',
            locationCity: 'Honolulu',
            locationSpot: 'Waikiki'
        }
    ];


    return (
        <>
            <h1>View All Sessions</h1>
            <div id='mainPhotosGrid'>
                {testPhotos.map((photo) => {
                    return (
                        <>  
                        <div className='displayCard'>
                            <img className='displayImg' src={photo.url} alt={photo.title}/>
                            <div className='displayCardWrapper'>
                                <h2 className='cardLocationTitle'>{photo.title}</h2>
                                <div className='cardInfoWrapper'>
                                    <h2 className='cardInfoTitle'>Photographer: John</h2>
                                    <h2 className='cardInfoTitle'>Date: 18/09/2023</h2>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}                       
            </div>
        </>
    )
}

export default Photos;