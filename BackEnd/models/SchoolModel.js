const mongoose = require("mongoose")

const SchoolSchema = new mongoose.Schema({
      id: Number,
      name: String,
      img: String,
      city: String,
      rating: Number,
      distance: Number,
      hourlyCharges: Number,
})

const SchoolModel = mongoose.model("driving_schools_data", SchoolSchema)

module.exports = SchoolModel