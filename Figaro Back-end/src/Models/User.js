const mongoose = require('mongoose');

//SCHEMA
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    contactNumber: {
        type: String
    },
    profilePicture: {
        type: String
    }

}, { timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;