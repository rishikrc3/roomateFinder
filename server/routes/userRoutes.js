const express = require('express');
const userController = require('../controllers/userController'); // Import the user controller
const authenticate = require('../middleware/authenticate'); // Middleware for JWT-based authentication

const router = express.Router(); // Create a new router

// User Registration
// This endpoint allows users to register by providing required information
router.post('/register', userController.register);

// User Login
// This endpoint allows users to log in with their email and password
router.post('/login', userController.login);

// Get User Profile (requires JWT authentication)
// This endpoint retrieves the profile of the currently authenticated user
router.get('/profile', authenticate, userController.getProfile);

// Update User Profile (requires JWT authentication)
// This endpoint allows users to update their profile, such as preferences or personal information
router.patch('/profile', authenticate, userController.updateProfile);

// Update User password (requires JWT authentication)
// Endpoint for changing password (requires authentication)
router.patch('/change-password', authenticate, userController.changePassword);

module.exports = router; // Export the router to use it in the main app
