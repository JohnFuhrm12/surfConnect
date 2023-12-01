const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Surfer'
    },
    profilepic: {
        type: String,
        default: 'https://res.cloudinary.com/dvmw658s9/image/upload/v1701463466/surfConnect/hhfnik5aghesyxzb25fe.png'
    }
});

module.exports = mongoose.model('User', userSchema);