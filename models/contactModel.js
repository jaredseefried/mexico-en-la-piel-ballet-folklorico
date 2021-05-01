const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  phone: {
    type: String
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  subject: {
    type: String,
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contacts", ContactSchema);

module.exports = Contact;