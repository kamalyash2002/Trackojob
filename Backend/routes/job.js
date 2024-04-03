const express = require('express');
const router = express.Router();
const {handleJobCreate} = require('../controllers/job');
const {handleJobUpdate} = require('../controllers/job');


router.post('/create', handleJobCreate);
router.post('/update', handleJobUpdate);

module.exports= router;