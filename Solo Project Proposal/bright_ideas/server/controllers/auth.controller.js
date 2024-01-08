const User = require('../models/user.model')

const HandleErrors = (err) => {
    console.log(err.message, err.code)
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
module.exports.sign_up = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.create({ email, password })
        res.status(201).json(user)

    } catch (err) {
        const errors = HandleErrors(err)
        return res.status(400).json({ errors })
    }
}