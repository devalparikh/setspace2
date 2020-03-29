///////////////////
//  User Model   //
///////////////////

const mongoose = require('mongoose');

const Schema = mongoose.Schema; // Init new model schema

// User Model Schema Defined Here (defining field)
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Ignores white space around the username
    minlength: 3 
  },
  password: {
      type: String,
      required: true,
      minlength: 6
  },
  points: {
      type: Number,
  },
  sumValue: {
    type: Number,
  },
}, {
  timestamps: true, // Stores when created in DB
});

// Applying user schema to user model (this is what is saved in the db)
const User = mongoose.model('User', userSchema);

module.exports = User;