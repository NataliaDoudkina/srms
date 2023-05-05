let Result = require("../models/Result");
const { validationResult } = require("express-validator");

const saveResult = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const student = req.body.student;
  const course = req.body.course;
  const score = req.body.score;
  
  const resultToSave = new Result({
    student,
    course,
    score,
  });
  try {
    resultToSave.save();
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
};

const getAllResults = async (req, res) => {
  try {
    const records = await Result.find();
    res.status(200).json({ records });
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports = {
  saveResult,
  getAllResults,
};
