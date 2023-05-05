let Student = require('../models/Student');
const { validationResult } = require("express-validator");

const saveStudent = async(req, res) => {
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const firstName = req.body.firstName;
    const familyName = req.body.familyName;
    const dob = req.body.dob;
    
    let studentToSave = new Student({
        firstName,
        familyName,
        dob
    })
    try {
        studentToSave.save();
        res.sendStatus(200);
    } catch(err){
        res.sendStatus(400)
    }
}

const getAllStudents = async(req, res) => {
    try {
        const records = await Student.find()
        res.status(200).json({records});
    } catch(err) {
        res.sendStatus(400)
    }
}

module.exports={
    saveStudent,
    getAllStudents
}