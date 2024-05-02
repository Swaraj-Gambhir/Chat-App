const mongoose = require("mongoose")
const color = require("colors")
const connectDB = async() =>
{
    try{
        const conn = await mongoose.connect(process.env.Mongo_URI);

        console.log(`MongoDB connected: ${conn.connection.host}`.red.bold);
    }
    catch (error)
    {
        console.log(`Error ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;