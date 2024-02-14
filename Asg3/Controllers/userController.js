const User = require('../Models/User');
const aggregateUserData = require('../../Asg5/aggregate');
async function getUsers(req, res) {
    try {
        const users = await User.find({}, '-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createUser(req, res) {
    const user = new User(req.body);
    try {
        const newUser = await user.save();
        const userWithoutPassword = { ...newUser._doc };
        delete userWithoutPassword.password;
        res.status(201).json(userWithoutPassword);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateUser(req, res) {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function aggregateData(req, res) {
    try {
        const result = await aggregateUserData(User);
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    aggregateData
};
