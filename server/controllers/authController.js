const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({message: 'Missing Field'});
    };

    const dbUser = await User.findOne({ username }).exec();

    if (!dbUser) {
        return res.status(401).json({message: 'User Not Found'});
    };

    const match = await bcrypt.compare(password, dbUser.password);

    if (!match) {
        return res.status(401).json({message: 'Invalid Username or Password'});
    };

    const reply = dbUser.username;

    res.json(reply);
});

module.exports = {
    login,
};