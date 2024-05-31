const mongoose = require('mongoose');

const RequirementSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: { type: String, required: true },
  rent: { type: Number, required: true },
  contactNo: { type: Number, required: true },
  lookingFor: { type: String, enum: ['Male', 'Female', 'any'], default: 'any' },
  preferenceStream: {type: String, required: true},
  description: { type: String},
});

const Requirement = mongoose.model('Requirement', RequirementSchema);

module.exports = Requirement;
