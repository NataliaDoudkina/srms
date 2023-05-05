const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  student: {
    type: String
  },
  course: {
    type: String
  },
  score: {
    type: String
  }
});

module.exports = mongoose.model("results", resultSchema);