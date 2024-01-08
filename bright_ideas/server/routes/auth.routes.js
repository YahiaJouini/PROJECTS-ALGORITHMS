const authController = require('../controllers/auth.controller')
module.exports = (app) => {
    app.post('/api/signup',authController.sign_up)
}