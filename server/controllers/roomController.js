const Room = require('../models/Room');
const User = require('../models/User');

const roomController = {
  // Create a new room (requires authentication)
  createRoom: async (req, res) => {
    const { messName, location, lookingFor, rent, occupancy, highlights, amenities } = req.body;

    try {
      const newRoom = new Room({
        messName,
        location,
        lookingFor,
        rent,
        occupancy,
        highlights,
        amenities,
        createdBy: req.userId, // The user who created the room
      });

      await newRoom.save();

      res.status(201).json(newRoom);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get all rooms
  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.find();
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get room by ID
  getRoomById: async (req, res) => {
    const { id } = req.params; // Room ID from the URL parameter

    try {
      // Find the room by ID and populate the 'createdBy' field with user information
      const room = await Room.findById(id).populate({
        path: 'createdBy',
        select: 'name email preferences gender from stream yearOfPassing', // Select the user's name, email, and preferences
      });

      if (!room) {
        return res.status(404).json({ message: 'Room not found' });
      }

      res.json(room); // Return the room details along with user information
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  },

  // Delete a room
  deleteRoom: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedRoom = await Room.findByIdAndDelete(id);

      if (!deletedRoom) {
        return res.status(404).json({ message: 'Room not found' });
      }

      res.json({ message: 'Room deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //update a room
  updateRoom: async (req, res) => {
    const { id } = req.params; // Room ID from the URL parameter
    const updateData = req.body; // The data to update the room

    try {
      // Find and update the room
      const updatedRoom = await Room.findByIdAndUpdate(id, updateData, { new: true });

      if (!updatedRoom) {
        return res.status(404).json({ message: 'Room not found' }); // If the room doesn't exist
      }

      res.json(updatedRoom); // Return the updated room details
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  },
};

module.exports = roomController;
