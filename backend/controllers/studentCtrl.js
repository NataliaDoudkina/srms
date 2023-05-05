let Student = require('../models/Student')

const saveStudent = async(req, res) => {
  
    const {firstName, familyName, dob} = req.body;
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