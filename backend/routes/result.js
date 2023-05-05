
const express = require("express");
const router = express.Router();
const resultCtrl = require('../controllers/resultCtrl');

router.get('/', resultCtrl.getAllResults);
router.post("/", resultCtrl.saveResult);

module.exports = router;