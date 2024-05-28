const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        // This regex checks if the email ends with "@nsec.ac.in"
        return /@nsec\.ac\.in$/.test(email);
      },
      message: 'Email must end with @nsec.ac.in',
    },
  },
  password: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  preferences: {
    nightowl: { type: Boolean, default: false },
    earlyBird: { type: Boolean, default: false },
    studious: { type: Boolean, default: false },
    fitnessFreak: { type: Boolean, default: false },
    sporty: { type: Boolean, default: false },
    petLover: { type: Boolean, default: false },
    partyLover: { type: Boolean, default: false },
    nonAlcoholic: { type: Boolean, default: true },
    musicLover: { type: Boolean, default: false },
    nonSmoker: { type: Boolean, default: true },
  },
  from: { type: String, required: true },
  stream: { type: String, required: true },
  yearOfPassing: { type: Number, required: true },
  profileImage: { type: String }, // Add profileImage field
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
