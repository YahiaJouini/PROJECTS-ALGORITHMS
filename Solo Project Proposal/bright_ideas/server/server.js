const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()
require('./config/mongoose.config')

const PORT = process.env.PORT
const app = express()


// middleWare
app.use(express.json(),
    express.urlencoded({ extended: true }),
    cors(
        {
            origin: ["http://localhost:5173"], // specify the origin that is allowed to access the server resources
            credentials: true // allowed to send credentials (cookies/tokens)
        }))
app.use(cookieParser())

const routes = require('./routes/auth.routes')
routes(app)


app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))