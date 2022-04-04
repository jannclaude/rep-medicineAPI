const express = require('express');
const router = express.Router();

const { Patients } = require('../models/patients');

//Get all patients
router.get('/api/patients', (req, res) => {
    Patients.find({}, (err, data) => {
        if(!err) {
            res.send(dataa);
        } else {
            console.log(err);
        }
    });
});

//Add patients
router.post('api/patients/add', (req, res) => {
    const newPatient = new Patients({
        fname: req.body.fname,
        lname: req.body.lname,
        medicineList: req.body.medicineList,
    });
    newPatient.save((err, data) => {
        res.status(200).json({code:200, message: 'Patient was added successfully',
        addPatient:data})
    });
});

//Get single patient
router.get('/api/patients/:id', (req, res) => {
    Patients.findById(req.params.id, (err,data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

//Delete friend
router.delete('/delete/:id', async (req, res) => {
    const result = await Patients.findByIdAndDelete({_id: req.params.id});
    res.json(result);
});

//Update a friend
router.patch('/update/:id', async (req, res) => {
    const patch = await Patients.updateOne({_id: req.params.id}, {$set: req.body});
    res.json(patch);
});

module.exports = router;