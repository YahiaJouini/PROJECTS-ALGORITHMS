const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "UserId is required"]
    },
    content: {
        type: String,
        required: [true, "Post content is required"]
    },
    likes: {
        type: Array
    }
})

module.exports = mongoose.model('post', postSchema)