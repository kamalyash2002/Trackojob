// Generating the referral message using the OpenAI API
const { User } = require("../models/users");
const { Job } = require("../models/job");
const { generateReferralMessage } = require("../service/referral");

const handleGenerateMessage = async (req, res) => {
    const {jobId, words, sex} = req.body;
    const job = await Job.findOne({
        _id: jobId
    });
    if(!job){
        return res.status(404).json({message: "Job not found"});
    }
    const user = await User.findOne({   
        _id: job.createdBy
    }); 
    referralMessage = "Hi";
    const message = await generateReferralMessage(referralMessage, user.email);
    return res.json({message});
}

module.exports = {
    handleGenerateMessage
}
