const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: Number,
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  specialite: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
