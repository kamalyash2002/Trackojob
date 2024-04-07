const express = require('express');
const cookieParser = require('cookie-parser');
const connect = require('./connect');
const {checkForAuthentication} = require('./middlewares/auth');
require("dotenv").config();

//routes
const urlRoute = require('./routes/url');
const authRoute = require('./routes/auth');
const jobRoute = require('./routes/job');
const referralRoute = require('./routes/referral');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


//port
const port = process.env.PORT || 8000;

const MONGO_URI = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/job-tracker';

connect(MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

//routes

// maintains the order of routes
app.use('/auth', authRoute);
app.use('/job', checkForAuthentication,jobRoute);
app.use('/referral', checkForAuthentication, referralRoute);
app.use('/', checkForAuthentication, urlRoute);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});