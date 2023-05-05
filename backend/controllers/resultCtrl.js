let Result = require('../models/Result')

const saveResult = async(req, res) => {
    const {student, course, score} = req.body;
    const resultToSave = new Result({
        student,
        course,
        score
    });
    try {
        resultToSave.save();
        res.sendStatus(200);
    } catch(err){
        res.sendStatus(400)
    }
}

const getAllResults = async(req, res) => {
    try {
        const records = await Result.find();
        res.status(200).json({records});
    } catch(err) {
        res.sendStatus(400)
    }
}

module.exports={
    saveResult,
    getAllResults
}