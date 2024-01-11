const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const HandleErrors = (err) => {
    let errors = { email: "", password: "", fields: "" }

    if (err.message === "All fields must be filled") {
        errors.fields = err.message
    }

    //already existing email (in registering)
    if (err.code === 11000) {
        errors.email = "That email is already registered"
    }
    // incorrect email 
    if (err.message === "The email is incorrect") {
        errors.email = err.message

    }
    // incorrect password 
    if (err.message === "The password is incorrect") {
        errors.password = err.message
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(error => {
            errors[error.properties.path] = error.properties.message
        })
    }
    return errors
}


const CreateToken = (id) => {
    return jwt.sign({ id }, process.env.jwtSecret, { expiresIn: '3d' })
}


module.exports.register = async (req, res) => {
    const { name, username, email, password } = req.body

    try {
        const user = await User.create({ name, username, email, password })
        const token = CreateToken(user._id)
        res.status(201).json({ username: user.username, token: token })

    } catch (err) {
        const errors = HandleErrors(err)
        res.json(errors)
    }
}

module.exports.loginUser = async (req, res) => {
    const { LoginEmail, LoginPassword } = req.body
    try {

        const user = await User.login(LoginEmail, LoginPassword)
        const token = CreateToken(user._id)
        res.status(201).json({ username: user.username, token: token })


    } catch (err) {
        const errors = HandleErrors(err)
        res.json(errors)
    }

}