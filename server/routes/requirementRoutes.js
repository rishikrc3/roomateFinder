const express = require('express');
const router = express.Router();
const requirementController = require('../controllers/requirementController');
const authenticate = require('../middleware/authenticate');

// Route to create a new requirement
router.post('/', authenticate, requirementController.createRequirement);

// Route to get all requirements
router.get('/', requirementController.getAllRequirements);

// Route to get a requirement by ID
router.get('/:id', requirementController.getRequirementById);

// Route to update a requirement
router.patch('/:id', authenticate, requirementController.updateRequirement);

// Route to delete a requirement
router.delete('/:id', authenticate, requirementController.deleteRequirement);

module.exports = router;
