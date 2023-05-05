
const express = require("express");
const router = express.Router();
const courseCtrl = require('../controllers/courseCtrl');
const { body } = require('express-validator');

router.get('/', courseCtrl.getAllCourses);
router.post("/", [body('title').trim().escape()], courseCtrl.saveCourse);

module.exports = router;