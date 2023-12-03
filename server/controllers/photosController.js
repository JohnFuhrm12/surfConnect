const User = require('../models/User');
const Photo = require('../models/Photo');

const asyncHandler = require('express-async-handler');

const getAllPhotos = asyncHandler(async (req, res) => {
    const photos = await Photo.find().select('-password').lean();
    if (!photos?.length) {
        return res.status(400).json({message: 'No Photos Found'});
    };
    res.json(photos);
});

const getPhotosByID = asyncHandler(async (req, res) => {
    const photos = await Photo.find().select('-password').lean();
    if (!photos?.length) {
        return res.status(400).json({message: 'No Photos Found'});
    };
    res.json(photos);
});

const createPhoto = asyncHandler(async (req, res) => {
    const { photographer, photographerName, cloudLink, sessionDate, sessionCountry, sessionCity, sessionSpot, priceUSD } = req.body;
    if (!photographer || !cloudLink || !sessionSpot || !priceUSD) {
        return res.status(400).json({message: 'Missing Field'});
    };

    const duplicate = await Photo.findOne( {cloudLink} ).lean().exec();
    if (duplicate) {
        return res.status(409).json({message: 'Duplicate Username'});
    };

    const photoObject = { photographer, photographerName, cloudLink, sessionDate, sessionCountry, sessionCity, sessionSpot, priceUSD };
    const photo = await Photo.create(photoObject);

    if (photo) {
        res.status(201).json({ message: `New photo ${cloudLink} uploaded` });
    } else {
        res.status(400).json({message: 'Invalid Photo Data'});
    };
});

const updatePhoto = asyncHandler(async (req, res) => {
    const { id, cloudLink, sessionSpot, priceUSD} = req.body;

    if (!id || !cloudLink || !sessionSpot || !priceUSD) {
        return res.status(400).json({message: 'Missing Field'});
    };

    const photo = await Photo.findById(id).exec();

    if (!photo) {
        return res.status(400).json({message: 'Photo Not Found'});
    };

    const duplicate = await Photo.findOne( {cloudLink} ).lean().exec();

    // Check That We Don't Update Cloudinary Link to One That Already Exists
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({message: 'Duplicate Cloudinary Link'});
    };

    photo.cloudLink = cloudLink;
    photo.priceUSD = priceUSD;

    const updatedPhoto = await photo.save();

    res.json({ message: `${updatedPhoto.cloudLink} updated`});
});

const deletePhoto = asyncHandler(async (req, res) => {
    const { id } = req.body;

    if (!id) {
        res.status(400).json({message: 'Photo ID Required'});
    };

    const photo = await Photo.findById(id).exec();

    if (!photo){
        return res.status(409).json({message: 'Photo Not Found'});
    };

    const result = await photo.deleteOne();

    const reply = `Photo ${result.cloudLink} with ID of ${result._id} deleted`;

    res.json(reply);
});

module.exports = {
    getAllPhotos,
    getPhotosByID,
    createPhoto,
    updatePhoto,
    deletePhoto
};