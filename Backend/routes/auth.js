const express = require('express');
const router = express.Router();
const {handleUserSignup} = require('../controllers/auth');
const {handleUserSignin} = require('../controllers/auth');

router.post('/signup', handleUserSignup);
router.post('/login',handleUserSignin);



module.exports= router;