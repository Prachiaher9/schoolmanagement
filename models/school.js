const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema for the School model
const schoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true 
  },
  password: {
    type: String,
    required: true
  }
});

// Middleware to hash the password before saving
schoolSchema.pre('save', async function (next) {
  const school = this;
  if (!school.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(school.password, salt);
    school.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

// Method to compare the provided password with the hashed password
schoolSchema.methods.comparePassword = async function (password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

// Create and export the School model
const School = mongoose.model('School', schoolSchema);

module.exports = School;