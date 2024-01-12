const post = require('../models/posts.model')

module.exports.addPost = async (req, res) => {
    const userId = req.id
    const likes = []
    const { content } = req.body

    try {
        const result = await post.create({ userId, content, likes })
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports.getPosts = async (req, res) => {
    try {
        const posts = await post.find()
        res.status(200).json(posts)
    } catch (err) {
        res.status(401).json(err)
    }
}