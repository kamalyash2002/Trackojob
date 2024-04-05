const express = require('express');
const { handlerGenerateShortUrl } = require('../controllers/url');
const { handleAnalytics } = require('../controllers/url');
const { handleListUrl , handleRedirect } = require('../controllers/url');

const router = express.Router();

router.post('/url', handlerGenerateShortUrl);

router.get('/url', handleListUrl);

router.get('/url/analytics/:shortId', handleAnalytics);

router.get("/:shortId", handleRedirect);

module.exports = router;