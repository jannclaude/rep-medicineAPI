const mongoose = require('mongoose');

const Patients = mongoose.model('Patients', {
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    medcineList: {
        type: [String],
        required: true
    }
});

module.exports = { Patients }
