const shortid = require('shortid');
const  {URL}  = require('../models/url');

const handlerGenerateShortUrl = async (req, res) => {
    // validating the URL
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error: 'URL is required'});
    }
    // check if the URL is present in the database
    const entry = await URL.findOne({
        redirectUrl: req.body.url
    });
    if(entry){
        return res.status(200).json({shortId: entry.shortId , "Shorten URL" : `http://localhost:8000/${entry.shortId}`});
    }
    // if the URL is not present in the database
    // generating the short id of the 8 characters
    const shortID = shortid();
    // storing in the database
    await URL.create({ 
        shortId: shortID, 
        redirectUrl: req.body.url ,
        visitHistory: [],
        // storing the user who created the URL
        createdBy: req.user._id
    });

    return res.status(201).json({"Original URL" : req.body.url , shortId: shortID , "Shorten URL" : `http://localhost:8000/${shortID}` });

};

const handleListUrl = async (req, res) => {
    const urls = await URL.find({createdBy: req.user._id});
    return res.status(200).json(urls);
};

const handleAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({shortId});
    if(!entry){
        return res.status(404).json({error: 'URL not found'});
    }
    return res.status(200).json({totalclicks: entry.visitHistory.length , analytics : entry.visitHistory});
};

const handleRedirect = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry?.redirectUrl);
  };

module.exports = {
    handlerGenerateShortUrl,
    handleListUrl,
    handleAnalytics,
    handleRedirect
}