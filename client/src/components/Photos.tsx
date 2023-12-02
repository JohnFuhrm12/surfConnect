import '../styles/photos.css';
import axios from "axios";
import { useState, useEffect } from 'react';

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

    const [images, setImages] = useState([]);

    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = async () => {
        await axios.get('http://localhost:3000/photos')
        .then((res) => {
            console.log(res.data);
            setImages(res.data);
            console.log(images);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <h1>View All Sessions</h1>
            <div id='mainPhotosGrid'>
                {images.map((photo:object) => {
                    return (
                        <>  
                        <div className='displayCard'>
                            <img className='displayImg' src={photo.cloudLink} alt={photo.photographer}/>
                            <div className='displayCardWrapper'>
                                <h2 className='cardLocationTitle'>{photo.photographer}</h2>
                                <div className='cardInfoWrapper'>
                                    <h2 className='cardInfoTitle'>Photographer: {photo.photographer}</h2>
                                    <h2 className='cardInfoTitle'>Date: {photo.sessionDate}</h2>
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