const express = require('express')
const cors = require('cors')

require('dotenv').config()
require('./config/mongoose.config')

const PORT = process.env.PORT
const app = express()


// middleWare
app.use(express.json(), express.urlencoded({ extended: true }), cors())

const routes = require('./routes/auth.routes')
routes(app)


app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))