const User = require('../models/User'); // Import the User model
const jwt = require('jsonwebtoken'); // For JWT token generation
const bcrypt = require('bcrypt'); // For password hashing
const { validationResult } = require('express-validator'); // For request validation

const userController = {
  // User registration
  register: async (req, res) => {
    // Extract the required data from the request body
    const { name, email, password, gender, from, stream, yearOfPassing, preferences } = req.body;

    // Validate the request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if the email already exists in the database
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already in use' });
      }

      // Create a new User
      const newUser = new User({
        name,
        email,
        password,
        gender,
        from,
        stream,
        yearOfPassing,
        preferences,
      });

      // Save the new User to the database
      await newUser.save();

      // Generate a JWT token for the new user
      const token = jwt.sign(
        { userId: newUser._id },
        process.env.JWT_SECRET, // Use the secret from environment variables
        { expiresIn: '1h' } // Token expires in 1 hour
      );

      // Return the token and user information
      res.status(201).json({ token, user: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  },

  // User login
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ email });

      // Check if the user exists and the password is correct
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate a JWT token for the user
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET, // Use the secret from environment variables
        { expiresIn: '1h' } // Token expires in 1 hour
      );

      // Return the token and user information
      res.json({ token, user });
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  },

  // Get user profile (requires authentication)
  getProfile: async (req, res) => {
    try {
      // Find the user by the ID extracted from the JWT token
      const user = await User.findById(req.userId).select('-password'); // Exclude the password field
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  },

  // Update user profile/preferences (requires authentication)
  updateProfile: async (req, res) => {
    const { preferences, ...otherData } = req.body; // Extract the updated data

    try {
      // Update the user's data and return the updated user
      const updatedUser = await User.findByIdAndUpdate(
        req.userId,
        { preferences, ...otherData },
        { new: true }
      ).select('-password'); // Exclude the password field

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  },

  // Update user password/preferences (requires authentication)
  changePassword: async (req, res) => {
    const { currentPassword, newPassword } = req.body;

    try {
      // Find the user by their user ID from the JWT token
      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Compare the current password with the stored hashed password
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect current password' });
      }

      // Hash the new password
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password with the new hashed password
      user.password = hashedNewPassword;
      await user.save();

      res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;
