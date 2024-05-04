const {Job} = require('../models/job');


const handleJobCreate = async (req, res) => {
    const { title , company , jobtype , location, salary, description , deadline , status} = req.body;
    // checking if the job alreafy exists
    const existingJob = await Job.findOne({
        title,
        company,
        jobtype,
        location,
        salary
    });
    if(existingJob){
        return res.status(400).json({message: "Job already exists"});
    }
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

const handleListJobs = async (req, res) => {
    console.log(req.user);
    const jobs = await Job.find({
        createdBy: req.user._id
    });
    return res.json({jobs});
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
        updatedAt: Date.now(),
    },
    {
        new: true
    });
    return res.json({job});
}

const handleDeleteJob = async(req,res)=>{
    const job = await Job.findOneAndDelete({
        _id:req.params.id
    });
    return res.json({job});
}




module.exports = {
    handleJobCreate,
    handleJobUpdate,
    handleListJobs,
    handleDeleteJob
}