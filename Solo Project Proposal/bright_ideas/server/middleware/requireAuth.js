const jwt = require('jsonwebtoken')
const User = require("../models/user.model")

const requireAuth = async (req, res, next) => {

    const { authorization } = req.body
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" })
    }

    const token = authorization.split(" ")[1]


    try {
        const { _id } = jwt.verify(token, process.env.jwtSecret)
        req.user = await User.findOne(_id).select('_id')
        next()

    } catch (err) {
        console.log(err)
    }
}

module.exports = requireAuth