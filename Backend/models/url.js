const mongoose  = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    // array of the timestamps of the visits to the shortened URL
    visitHistory: [{timestamp: {type : Number}}],
    createdBy :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
    },
    {timestamps: true}
);

// making the model
const URL = mongoose.model('url', urlSchema);


module.exports = {
    URL
};