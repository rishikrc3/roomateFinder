const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  messName: { type: String, required: true },
  location: { type: String, required: true },
  lookingFor: { type: String, enum: ['Male', 'Female', 'Any'], default: 'Any' },
  rent: { type: Number, required: true },
  occupancy: { type: String, enum: ['Double', 'Triple'], default: 'Double' },
  contactNo: { type: Number, required: true },
  highlights: {
    AttachedWashroom: { type: Boolean, default: false },
    MarketNearby: { type: Boolean, default: false },
    CloseToMetroStation: { type: Boolean, default: false },
    PublicTransportNearby: { type: Boolean, default: false },
    NoRestriction: { type: Boolean, default: false },
    GymNearby: { type: Boolean, default: false },
    Housekeeping: { type: Boolean, default: false },
  },
  amenities: {
    Tv: { type: Boolean, default: false },
    Fridge: { type: Boolean, default: false },
    Kitchen: { type: Boolean, default: false },
    Wifi: { type: Boolean, default: false },
    PowerBackup: { type: Boolean, default: false },
    Cook: { type: Boolean, default: false },
    Parking: { type: Boolean, default: false },
    AnimationEffectc: { type: Boolean, default: false },
  },
  preferredStream: {
    type: String,
    enum: [
      'AEIE', 'BME', 'CSE', 'ECE', 'IT', 'EE', 'CE', 'CSBS', 'ME', 'CSE(AI/ML)'
    ],
    required: true
  }, // Added preferredStream with enum
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
