const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    cloudLink: {
        type: String,
        required: true
    },
    photographer: {
        type: String,
        required: true
    },
    sessionDate: {
        type: String,
        required: true
    },
    priceUSD: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Photo', photoSchema);