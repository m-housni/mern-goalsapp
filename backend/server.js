const path = require('path'); // Path is a node module that allows us to work with file and directory paths
const express = require('express'); // Express is a node module that allows us to create a server
const colors = require('colors'); // Colors is a node module that allows us to colorize our console logs
const dotenv = require('dotenv').config(); // Dotenv is a node module that allows us to use environment variables
const { errorHandler } = require('./middleware/errorMiddleware'); // Middleware that handles errors
const connectDB = require('./config/db'); // Connects to MongoDB
const port = process.env.PORT || 5000; // If there is no environment variable called PORT, use 5000

connectDB(); // Connect to MongoDB

const app = express(); // Create an express server

app.use(express.json()); // Allows us to accept JSON data in the body
app.use(express.urlencoded({ extended: false })); // Allows us to accept form data

app.use('/api/goals', require('./routes/goalRoutes')); // goal routes
app.use('/api/users', require('./routes/userRoutes')); // user routes

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler); // Use the error handler middleware

app.listen(port, () => console.log(`Server started on port ${port}`)); // Start the server
