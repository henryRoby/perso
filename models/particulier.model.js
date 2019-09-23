const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ParticulierSchema = new Schema({
  _id: Number,
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  }
});

module.exports = User = mongoose.model("particuliers", ParticulierSchema);