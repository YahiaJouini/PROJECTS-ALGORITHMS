const post = require('../models/posts.model')

// create a post
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

// get all posts
module.exports.getPosts = async (req, res) => {
    try {
        const posts = await post.find({})
        res.status(200).json(posts)
    } catch (err) {
        res.status(401).json(err)

    }
}


// update a post

module.exports.likePost = async (req, res) => {
    const { userId } = req.body
    const currentPost = await post.findById(req.params.id)
    if (!currentPost) {
        return res.status(400).json({ message: 'the post does not exist anymore' })
    }
    const index = currentPost.likes.indexOf(userId)
    if (index !== -1) {
        currentPost.likes.splice(index, 1)
    } else {
        currentPost.likes.push(userId)
    }

    try {
        const posts = await post.findOneAndUpdate({ _id: req.params.id }, currentPost, { new: true, runValidators: true })
        res.status(200).json(posts)
    } catch (err) {
        res.status(400).json(err)
    }
}

// deleting a post 

module.exports.deletePost = async (req, res) => {
    try {
        await post.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: "post deleted" })
    } catch (err) {
        res.status(400).json(err)
    }

}

// get one post 

module.exports.getPost = async (req, res) => {
    try {
        const result = await post.findOne({ _id: req.params.id })
        res.status(200).json(result)
    } catch (err) {

        res.status(200).json(err)
    }
}