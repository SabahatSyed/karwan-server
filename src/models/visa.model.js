const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const VisaSchema = new mongoose.Schema({
  visaRequestDate: { type: Date /* , required: true */ },
  user_id: { type: Id, ref: "User" },
  Family:[{
        fullName:{type:String},
        husbandName:{type:String},
        motherName:{type:String},
        cnic:{type:String},
        passport:{type:String},
        gender:{type:String},
        maritalStatus:{type:String},
        contact:{type:String},
        email:{type:String},
        dateofBirth:{type:String},
        occupation:{type:String},
        passportNumber:{type:String},
        passport:{type:String},
        id:{type:String},
        vaccination:{type:String},
        marriage:{type:String},
        birth:{type:String} 
  }],
  Status:{type:String},
  Description:{type:String},
  application_type:{type:String},
  visatype:{type: Id, ref: "VisaType"},
  payment:{type:Number}
});

const Visa = new mongoose.model("Visa", VisaSchema);

module.exports = Visa;
