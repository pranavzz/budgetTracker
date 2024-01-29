// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any other user-related fields you need
});

const User = mongoose.model('User', userSchema);

module.exports = User;