const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const AdminModel = mongoose.model("registered_school", AdminSchema)

module.exports = AdminModel