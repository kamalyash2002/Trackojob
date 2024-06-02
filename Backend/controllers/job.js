const {Job} = require('../models/job');
const {JobStatus} = require ('../constant');


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

// this will return the metrics of the jobs for the user
const handleJobMetrics = async (req, res) => {
    const jobs = await Job.find({
        createdBy: req.user._id
    });
    const metrics = {
        [JobStatus.WISHLIST]: 0,
        [JobStatus.APPLIED]: 0,
        [JobStatus.UNDER_REVIEW]: 0,
        [JobStatus.INTERVIEW_SCHEDULED]: 0,
        [JobStatus.INTERVIEWED]: 0,
        [JobStatus.OFFER_EXTENDED]: 0,
        [JobStatus.OFFER_ACCEPTED]: 0,
        [JobStatus.OFFER_DECLINED]: 0,
        [JobStatus.ONBOARDING]: 0,
        [JobStatus.HIRED]: 0,
        [JobStatus.REJECTED]: 0
        
    };
    jobs.forEach((job) => {
        metrics[job.status] = metrics[job.status] + 1;
    });
    return res.json({metrics});
}




module.exports = {
    handleJobCreate,
    handleJobUpdate,
    handleListJobs,
    handleDeleteJob,
    handleJobMetrics
}