const mongoose = require('mongoose') // Mongoose is a node module that allows us to work with MongoDB

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI) // Connect to MongoDB
    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
