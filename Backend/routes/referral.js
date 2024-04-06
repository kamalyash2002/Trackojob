const express = require('express');
const router = express.Router();
const {handleGenerateMessage} = require("../controllers/referral");

router.post('/generate', handleGenerateMessage);

module.exports = router;