const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const VisaTypeSchema = new mongoose.Schema({
  Category:{type:String
  },
});

const Visa = new mongoose.model("Category", VisaTypeSchema);

module.exports = Visa;
