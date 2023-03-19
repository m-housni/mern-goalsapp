const express = require('express') // Express is a node module that allows us to create a server
const router = express.Router() // Router is a method of Express that allows us to create routes
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController') // Import the user controller
const { protect } = require('../middleware/authMiddleware') // Import the auth middleware

router.post('/', registerUser) // register a user
router.post('/login', loginUser) // login a user
router.get('/me', protect, getMe) // get the logged in user

module.exports = router // Export the router
