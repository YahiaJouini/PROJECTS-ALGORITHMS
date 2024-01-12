const postController = require('../controllers/post.controller')

const requireAuth = require('../middleware/requireAuth')

module.exports = (app) => {
    app.use(requireAuth)
    app.post('/api/addPost', postController.addPost)
    app.get('/app/getPosts', postController.getPosts)
}
