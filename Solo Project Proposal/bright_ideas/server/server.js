const express = require('express')
const cors = require('cors')

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

const authRoutes = require('./routes/auth.routes')
authRoutes(app)

const postRoutes = require('./routes/posts.routes')
postRoutes(app)


app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))