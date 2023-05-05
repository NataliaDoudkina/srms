const express = require("express");
const router = express.Router();
const studentCtrl = require("../controllers/studentCtrl");
const { body } = require("express-validator");

router.get("/", studentCtrl.getAllStudents);
router.post(
  "/",
  [
    body("firstName").notEmpty().trim().escape(),
    body("familyName").notEmpty().trim().escape(),
    body("dob").notEmpty().trim().escape(),
  ],
  studentCtrl.saveStudent
);

module.exports = router;
