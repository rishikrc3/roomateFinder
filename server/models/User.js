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
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  preferences: {
    Nightowl: { type: Boolean, default: false },
    EarlyBird: { type: Boolean, default: false },
    Studious: { type: Boolean, default: false },
    FitnessFreak: { type: Boolean, default: false },
    Sporty: { type: Boolean, default: false },
    PetLover: { type: Boolean, default: false },
    PartyLover: { type: Boolean, default: false },
    NonAlcoholic: { type: Boolean, default: true },
    MusicLover: { type: Boolean, default: false },
    NonSmoker: { type: Boolean, default: true },
  },
  from: { type: String, required: false },
  stream: { type: String, enum: ['AEIE', 'BME', 'CE', 'CSBS','CSE', 'CSE(AI/ML)', 'ECE',  'EE',  'IT', 'ME', ], required: true },
  yearOfPassing: { type: Number, required: true, min: 2000, max: 2050 },
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
