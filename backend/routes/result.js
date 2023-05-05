const express = require("express");
const router = express.Router();
const resultCtrl = require("../controllers/resultCtrl");
const { body } = require("express-validator");

router.get("/", resultCtrl.getAllResults);
router.post(
  "/",
  [
    body("student").notEmpty().trim().escape(),
    body("course").notEmpty().trim().escape(),
    body("score").notEmpty().trim().escape(),
  ],
  resultCtrl.saveResult
);

module.exports = router;
