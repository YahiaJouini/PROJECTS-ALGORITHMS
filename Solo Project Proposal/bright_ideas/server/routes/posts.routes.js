const postController = require('../controllers/post.controller')

const requireAuth = require('../middleware/requireAuth')

module.exports = (app) => {
    app.use(requireAuth)
    app.post('/api/addPost', postController.addPost)
    app.get('/api/getPosts', postController.getPosts)
    app.patch('/api/LikePost/:id',postController.likePost)
    app.delete('/api/deletePost/:id',postController.deletePost)
}
