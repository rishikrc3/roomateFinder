const express = require('express');
const roomController = require('../controllers/roomController'); // Room controller
const authenticate = require('../middleware/authenticate'); // JWT-based authentication
const authorizeRoomOwner = require('../middleware/authorizeRoomOwner'); // Middleware to ensure the correct user is updating the room

const router = express.Router();

// Create a new room (POST /api/rooms)
router.post('/', authenticate, roomController.createRoom);

// Get all rooms (GET /api/rooms)
router.get('/', roomController.getAllRooms);

// Get a room by ID (GET /api/rooms/:id)
router.get('/:id', roomController.getRoomById);

// Delete a room by ID (DELETE /api/rooms/:id)
router.delete('/:id', authenticate, roomController.deleteRoom);

// Update a room by ID (requires authentication and authorization)
router.patch('/:id', authenticate, authorizeRoomOwner, roomController.updateRoom);

module.exports = router;
