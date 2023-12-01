const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    photographer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    cloudLink: {
        type: String,
        required: true
    },
    sessionDate: {
        type: String,
        required: true
    },
    sessionCountry: {
        type: String,
    },
    sessionCity: {
        type: String,
    },
    sessionSpot: {
        type: String,
        required: true
    },
    priceUSD: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Photo', photoSchema);