const mongoose = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    username: {
        type: String,
        required: [true, 'The userName is required']
    },
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


userSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw new Error('All fields must be filled')
    }

    const user = await this.findOne({ email: email }) // this refers to the Called (User in our case)
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw new Error("The password is incorrect")
    }
    throw new Error('The email is incorrect')
}
module.exports = mongoose.model('user', userSchema)