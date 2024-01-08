const mongoose = require('mongoose')

const Start = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.dbName}`)
        console.log('connected to the database')
    } catch (err) {
        console.log(err)
    }
}
Start()