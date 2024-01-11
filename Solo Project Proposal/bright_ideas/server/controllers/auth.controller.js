const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const HandleErrors = (err) => {
    let errors = { email: "", password: "" }
    if (err.code === 11000) {
        errors.email = "That email is already registered"
        return errors
    }
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(error => {
            errors[error.properties.path] = error.properties.message
        })
    }
    return errors
}


const CreateToken = (id) => {
    return jwt.sign({ id }, process.env.jwtSecret, { expiresIn: 3 * 24 * 360 })
}


module.exports.register = async (req, res) => {
    const { name, username, email, password } = req.body

    try {
        const user = await User.create({ name, username, email, password })
        const token = CreateToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 360 * 1000 })
        res.status(201).json({ user: user._id })

    } catch (err) {
        const errors = HandleErrors(err)
        res.json(errors)
    }
}

module.exports.loginUser = async (req, res) => {
    const { LoginEmail, LoginPassword } = req.body
    try {
        const user = await User.login(LoginEmail, LoginPassword)
        res.status(200).json({ user: user._id })
    } catch (err) {
        res.json({})
    }

}