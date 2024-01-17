const jwt = require('jsonwebtoken')
const User = require("../models/user.model")

const requireAuth = async (req, res, next) => {

    const { authorization, id } = req.method === "GET" || req.method==="DELETE" ? req.query : req.body

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" })
    }

    const token = authorization.split(" ")[1]


    try {
        jwt.verify(token, process.env.jwtSecret, (err) => {
            if (err) { return res.status(403).json(err) }
        })
        req.id = id
        next()
    } catch (err) {
        console.log(err)
    }
}

module.exports = requireAuth