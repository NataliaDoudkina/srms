const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: {
    type: String
  },
  familyName: {
    type: String
  },
  dob: {
    type: Date
  },
  
 
},  {timestamps: false
});

module.exports = mongoose.model("students", studentSchema);