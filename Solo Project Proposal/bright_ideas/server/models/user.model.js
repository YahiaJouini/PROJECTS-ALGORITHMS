const mongoose = require("mongoose")
const { isEmail } = require("validator")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "The Email is required"],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'] //to make sure it is a valid email adress 
    },
    password: {
        type: String,
        required: [true, "The Password is required"],
        minlength: [6, 'Password must be at least 6 characters long']

    }
})

module.exports = mongoose.model('user', userSchema)