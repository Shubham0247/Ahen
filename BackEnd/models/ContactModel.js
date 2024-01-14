const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  query: String,
});

const ContactModel = mongoose.model("contacts", UserSchema)

module.exports = ContactModel
