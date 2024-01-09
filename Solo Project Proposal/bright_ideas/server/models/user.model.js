const mongoose = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require('bcrypt')

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

// fire a function before a doc is saved to the db
// we use function instead of an arrow key to get the value of this (instant of the user created)
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

module.exports = mongoose.model('user', userSchema)