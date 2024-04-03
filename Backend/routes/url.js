const express = require('express');
const { handlerGenerateShortUrl } = require('../controllers/url');
const { handleAnalytics } = require('../controllers/url');
const { handleListUrl } = require('../controllers/url');

const router = express.Router();

router.post('/', handlerGenerateShortUrl);

router.get('/all', handleListUrl);

router.get('/analytics/:shortId', handleAnalytics);

module.exports = router;