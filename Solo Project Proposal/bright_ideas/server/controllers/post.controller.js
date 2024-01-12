const post = require('../models/posts.model')

module.exports.addPost = async (req, res) => {
    const userId = "lkdshgdshg"
    const likes = []
    const { content } = req.body

    try {
        const result = await post.create({ userId, content, likes })
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json(err.message)
    }
}