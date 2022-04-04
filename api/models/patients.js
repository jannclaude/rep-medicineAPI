const mongoose = require('mongoodr');

const Patients = mongoose.model('Friends', {
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