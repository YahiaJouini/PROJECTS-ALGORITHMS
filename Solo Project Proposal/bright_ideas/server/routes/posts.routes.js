const postController = require('../controllers/post.controller')

const requireAuth = require('../middleware/requireAuth')

module.exports = (app) => {
    app.use(requireAuth)
}

module.exports = (app) => {
    app.post('/api/addPost', postController.addPost)
}