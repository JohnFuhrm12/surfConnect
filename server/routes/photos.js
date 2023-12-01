const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photosController');

router.route('/')
    .get(photosController.getAllPhotos)
    .post(photosController.createPhoto)
    .patch(photosController.updatePhoto)
    .delete(photosController.deletePhoto)

module.exports = router;