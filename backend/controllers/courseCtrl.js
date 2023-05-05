const { validationResult } = require("express-validator");

let Course = require("../models/Course");

const saveCourse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const title = req.body.title;
  const courseToSave = new Course({
    title,
  });
  try {
    courseToSave.save();
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
};

const getAllCourses = async (req, res) => {
  try {
    const records = await Course.find();
    res.status(200).json({ records });
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports = {
  saveCourse,
  getAllCourses,
};
