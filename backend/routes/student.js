
const express = require("express");
const router = express.Router();
const studentCtrl = require('../controllers/studentCtrl');

router.get('/', studentCtrl.getAllStudents);
router.post("/", studentCtrl.saveStudent);

module.exports = router;
