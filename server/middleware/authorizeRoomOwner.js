const Room = require('../models/Room');

// Middleware to ensure only the room owner can update it
const authorizeRoomOwner = async (req, res, next) => {
  const { id } = req.params; // Room ID from the URL parameter

  try {
    const room = await Room.findById(id);

    if (!room) {
      return res.status(404).json({ message: 'Room not found' }); // Room not found
    }

    if (room.createdBy.toString() !== req.userId) {
      return res.status(403).json({ message: 'Forbidden: You do not have permission to update this room' }); // Unauthorized
    }

    next(); // User is authorized, continue to the next middleware or route handler
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
};

module.exports = authorizeRoomOwner;
