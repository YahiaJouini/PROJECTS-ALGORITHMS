const authController = require('../controllers/auth.controller')
module.exports = (app) => {
    app.post('/api/register', authController.register)
    app.post('/api/loginUser', authController.loginUser)
    app.get('/api/getUser/:id',authController.getUser)
}