const {Job} = require('../models/job');


const handleJobCreate = async (req, res) => {
    const { title , company , jobtype , location, salary, description , deadline , status} = req.body;
    const job = await Job.create({
        title ,
        company,
        jobtype,
        location,
        salary,
        description,
        deadline,
        status,
        createdBy: req.user._id
    });
    return res.json({job});
}

const handleJobUpdate = async (req, res) => {
    const { title , company , jobtype , location, salary, description , deadline , status} = req.body;
    const job = await Job.findOneAndUpdate({
        _id: req.params.id
    },
    {
        title ,
        company,
        jobtype,
        location,
        salary,
        description,
        deadline,
        status,
    },
    {
        new: true
    });
    return res.json({job});
}

module.exports = {
    handleJobCreate,
    handleJobUpdate
}