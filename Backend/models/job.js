const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required : true
    },
    jobtype : {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
    },
    {timestamps: true}
);

// making the model 
const Job = mongoose.model('job', jobSchema);

module.exports = {
    Job
};