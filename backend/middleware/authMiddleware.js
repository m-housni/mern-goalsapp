const jwt = require('jsonwebtoken') // JSON Web Token is a node module that allows us to create and verify tokens
const asyncHandler = require('express-async-handler') // Express Async Handler is a node module that allows us to use async/await in our routes
const User = require('../models/userModel') // Import the user model

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1] // Split the token from the Bearer

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET) // Verify the token using the secret

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password') // Select all fields except password

      next() // Continue to the next middleware
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }
