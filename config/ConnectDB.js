const mongoose = require("mongoose");
const config = require('config');
const mongoUri = config.get('mongoUri')
const connectDB = async () => {
    try {
        let result = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database is connected")
    }
    catch (error) {
        console.log(`cannot connect to database+${error}`)
    }
};

module.exports = connectDB;