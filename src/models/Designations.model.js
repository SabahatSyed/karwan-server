const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const VisaTypeSchema = new mongoose.Schema({
  Designation:{type:String
  },
});

const Visa = new mongoose.model("Designation", VisaTypeSchema);

module.exports = Visa;
