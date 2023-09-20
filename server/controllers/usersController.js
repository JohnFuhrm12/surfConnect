const User = require('../models/User');
const Photo = require('../models/Photo');

const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean();
    if (!users) {
        return res.status(400).json({message: 'No Users Found'});
    };
    res.json(users);
});

const createUser = asyncHandler(async (req, res) => {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
        return res.status(400).json({message: 'Missing Field'});
    };

    const duplicate = await User.findOne( {username} ).lean().exec();
    if (duplicate) {
        return res.status(409).json({message: 'Duplicate Username'});
    };

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const userObject = { username, "password": hashedPassword, role};
    const user = await User.create(userObject);

    if (user) {
        res.status(201).json({ message: `New user ${username} created` });
    } else {
        res.status(400).json({message: 'Invalid User Data'});
    };
});

const updateUser = asyncHandler(async (req, res) => {
    const { id, username, password, role} = req.body;

    if (!id || !username || !password || !role) {
        return res.status(400).json({message: 'Missing Field'});
    };

    const user = await User.findById(id).exec();

    if (!user) {
        return res.status(400).json({message: 'User Not Found'});
    };

    const duplicate = await User.findOne( {username} ).lean().exec();

    // Check That We Don't Update Username to One That Already Exists
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({message: 'Duplicate Username'});
    };

    user.username = username;
    user.role = role;

    if (password) {
        user.password = await bcrypt.hash(password, 10);
    };

    const updatedUser = await user.save();

    res.json({ message: `${updatedUser.username} updated`});
});

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body;

    if (!id) {
        res.status(400).json({message: 'User ID Required'});
    };

    const user = await User.findById(id).exec();

    if (!user){
        return res.status(409).json({message: 'User Not Found'});
    };

    const result = await user.deleteOne();

    const reply = `User ${result.username} with ID of ${result._id} deleted`;

    res.json(reply);
});

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};