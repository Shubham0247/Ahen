const mongoogse = require("mongoose")

const SchoolSchema = new mongoose.Scheme({
      id: Number,
      name: String,
      img: String,
      city: String,
      rating: Number,
      distance: Number,
      hourlyCharges: Number,
})

const SchoolModel = mongoogse.model("driving_school_data", SchoolSchema)

module.exports = SchoolModel