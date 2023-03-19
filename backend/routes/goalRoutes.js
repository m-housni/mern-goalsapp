const express = require('express') // Express is a node module that allows us to create a server
const router = express.Router() // Router is a method of Express that allows us to create routes
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController') // Import the goal controller

const { protect } = require('../middleware/authMiddleware') // Import the auth middleware

router.route('/').get(protect, getGoals).post(protect, setGoal) // set the get and post routes for the goals
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal) // set the delete and put routes for the goals

module.exports = router // Export the router
