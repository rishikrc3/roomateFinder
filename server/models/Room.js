const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  messName: { type: String, required: true },
  location: { type: String, required: true },
  lookingFor: { type: String, enum: ['male', 'female', 'any'], default: 'any' },
  rent: { type: Number, required: true },
  occupancy: { type: String, enum: ['double', 'triple'], default: 'double' },
  highlights: {
    attachedWashroom: { type: Boolean, default: false },
    marketNearby: { type: Boolean, default: false },
    closeToMetroStation: { type: Boolean, default: false },
    publicTransportNearby: { type: Boolean, default: false },
    noRestriction: { type: Boolean, default: false },
    gymNearby: { type: Boolean, default: false },
    housekeeping: { type: Boolean, default: false },
  },
  amenities: {
    tv: { type: Boolean, default: false },
    fridge: { type: Boolean, default: false },
    kitchen: { type: Boolean, default: false },
    wifi: { type: Boolean, default: false },
    powerBackup: { type: Boolean, default: false },
    cook: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    ac: { type: Boolean, default: false },
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
