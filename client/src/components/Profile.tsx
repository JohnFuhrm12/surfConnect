import '../styles/profile.css';
import Login from './Login';
import { useState, useEffect } from 'react';
import axios from "axios";

function Profile( {...props} ) {
    const [imageUrl, setImageUrl] = useState();
    const [imageSelected, setImageSelected] = useState("");

    const [sessionDate, setSessionDate] = useState();
    const [sessionCountry, setSessionCountry] = useState();
    const [sessionCity, setSessionCity] = useState();
    const [sessionSpot, setSessionSpot] = useState();
    const [price, setPrice] = useState();

    const uploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "surfConnectUserPhotos");
    
        // Upload to Cloudinary and Grab URL
        axios.post("https://api.cloudinary.com/v1_1/dvmw658s9/image/upload", formData).then((response) => {
          console.log(response);
          setImageUrl(response.data.url);
        })
        .catch(function (error) {
            console.log(error);
        });
    
        console.log(imageUrl);
    
        // Upload Cloudinary Link and Metadata to MongoDB
        axios.post('http://localhost:3000/photos', {
            photographer: props.authedID,
            photographerName: props.firstName,
            cloudLink: imageUrl,
            sessionDate: sessionDate,
            sessionCountry: sessionCountry,
            sessionCity: sessionCity,
            sessionSpot: sessionSpot,
            priceUSD: price
          })
          .then(function (response) {
            console.log(response);
            //navigate('/photos');
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const [images, setImages] = useState([]);

    useEffect(() => {
        getUploadedPhotos();
    }, [])

    const getUploadedPhotos = async () => {
        await axios.get('http://localhost:3000/photos', {
            params: {
                photographer: props.authedID
            }
         })
        .then((res) => {
            console.log(res.data);
            setImages(res.data);
            console.log(images);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const [markedDelPhoto, setMarkedDelPhoto] = useState();

    useEffect(() => {
        console.log(markedDelPhoto);
    }, [markedDelPhoto])

    function startDelete(id) {
        setMarkedDelPhoto(id);
        console.log(id);
        //deletePhoto();
    }

    const deletePhoto = async () => {
        await axios.delete('http://localhost:3000/photos', {
            params: {
                id: markedDelPhoto
            }
         });
    }

    return (
        <>
            {props.loggedIn? 
            <>
                <h1>Dashboard</h1>
                <h2>Welcome back {props.firstName}!</h2> 
                <div id='dashboardContainer'>
                    <div id='profileInfo'>
                        <img id='profilePicture' src={props.profilePic} alt='Profile IMG'/>
                        <h2 className='profileHeader'>{props.firstName} {props.lastName}</h2> 
                        <h2 className='profileHeader' id='roleTitle'>{props.role}</h2>
                    </div>
                    <div id='purchasesContainer'>
                        <h2 className='profileHeader'>Recent Purchases</h2>
                    </div>
                    <div id='editsContainer'>
                        <button className='profileEditButton'>Edit Profile</button>
                    </div>
                </div>
                {props.role == 'Photographer'? 
                <>
                    <div id='photographerSection'>
                        <h2 className='profileSubtitle'>Upload Photos</h2>
                        <form id='photoUploadForm'>
                            <input className='photoInput' type='text' placeholder='Country' onChange={(e) => {setSessionCountry(e.target.value)}} value={sessionCountry}/>
                            <input className='photoInput' type='text' placeholder='City/State' onChange={(e) => {setSessionCity(e.target.value)}} value={sessionCity}/>
                            <input className='photoInput' type='text' placeholder='Spot Name' onChange={(e) => {setSessionSpot(e.target.value)}} value={sessionSpot}/>
                            <input className='photoInput' type='text' placeholder='Date' onChange={(e) => {setSessionDate(e.target.value)}} value={sessionDate}/>
                            <input className='photoInput' type='text' placeholder='Price' onChange={(e) => {setPrice(e.target.value)}} value={price}/>
                            <input className="fileInput" type='file' onChange={(event) => {setImageSelected(event.target.files[0])}}/>
                            <button onClick={uploadImage}  id='photoUploadButton' type='submit'>Upload</button>
                        </form>
                        <h2 className='profileSubtitle'>Uploaded Photos</h2>
                        <div id='uploadedContainerGrid'>
                        {images.map((photo) => {
                            return (
                                <>
                                <div className='displayCardContainerProfile'>
                                    <div className='displayCardProfile'>
                                        <img className='displayImgProfile' src={photo.cloudLink} alt={photo.photographer}/>
                                        <div className='displayCardWrapperProfile'>
                                            <h2 className='cardLocationTitleProfile'>{photo.sessionCity} - {photo.sessionSpot}</h2>
                                            <div className='cardInfoWrapperProfile'>
                                                <h2 className='cardInfoTitleProfile'>Photographer: {photo.photographerName}</h2>
                                                <h2 className='cardInfoTitleProfile'>Date: {photo.sessionDate}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='profileDeletePhotoButton'>Delete</button>
                                </div>
                                </>
                            )
                        })}
                        </div>
                    </div>
                </> 
                : 
                <></>}
            </>
            : 
            <Login {...props} />}
        </>
    )
}

export default Profile;