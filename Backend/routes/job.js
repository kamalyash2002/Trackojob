const express = require('express');
const router = express.Router();
const {handleJobCreate} = require('../controllers/job');
const {handleJobUpdate} = require('../controllers/job');
const {handleListJobs} = require('../controllers/job');
require("dotenv").config();


router.post('/', handleJobCreate);
router.patch('/:id', handleJobUpdate);
router.get('/', handleListJobs);

module.exports= router;