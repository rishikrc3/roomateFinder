const Requirement = require('../models/Requirement');
const User = require('../models/User');

const requirementController = {
  createRequirement: async (req, res) => {
    const { location, rent, lookingFor, preferenceStream, description } = req.body;
    const userId = req.userId; // Assuming authenticate middleware sets req.userId

    try {
      const newRequirement = new Requirement({
        userId,
        location,
        rent,
        lookingFor,
        preferenceStream,
        description,
      });

      await newRequirement.save();
      res.status(201).json(newRequirement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllRequirements: async (req, res) => {
    try {
      const requirements = await Requirement.find().populate('userId', 'name email');
      res.json(requirements);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getRequirementById: async (req, res) => {
    const { id } = req.params; // Requirement ID from the URL parameter

    try {
      // Find the requirement by ID and populate the 'userId' field with user information
      const requirement = await Requirement.findById(id).populate({
        path: 'userId',
        select: 'name email preferences gender from stream yearOfPassing', // Select the user's details to populate
      });

      if (!requirement) {
        return res.status(404).json({ message: 'Requirement not found' });
      }

      res.json(requirement); // Return the requirement details along with user information
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  },

  updateRequirement: async (req, res) => {
    const { id } = req.params;
    const { location, rent, lookingFor, preferenceStream, description } = req.body;

    try {
      const updatedRequirement = await Requirement.findByIdAndUpdate(
        id,
        { location, rent, lookingFor, preferenceStream, description },
        { new: true }
      );

      if (!updatedRequirement) {
        return res.status(404).json({ message: 'Requirement not found' });
      }

      res.json(updatedRequirement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteRequirement: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedRequirement = await Requirement.findByIdAndDelete(id);

      if (!deletedRequirement) {
        return res.status(404).json({ message: 'Requirement not found' });
      }

      res.json({ message: 'Requirement deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = requirementController;
