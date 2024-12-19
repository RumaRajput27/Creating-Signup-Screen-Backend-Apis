const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express(); // Initialize express app

// Middleware
app.use(bodyParser.json()); // Parse JSON requests

// Routes
app.use('/api/users', userRoutes); // Use user-related routes under "/api/users"

// Export the app instance
module.exports = app;
