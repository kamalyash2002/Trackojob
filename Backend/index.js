const express = require('express');
const cookieParser = require('cookie-parser');
const connect = require('./connect');
const {URL} = require('./models/url');
const path = require('path');
const {checkForAuthentication} = require('./middlewares/auth');

//routes
const urlRoute = require('./routes/url');
const authRoute = require('./routes/auth');
const jobRoute = require('./routes/job');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set("views",path.resolve(__dirname, "views"));


//port
const port = process.env.PORT || 8000;

connect('mongodb://127.0.0.1:27017/job-tracker').then(() => {
    console.log('Connected to MongoDB');
    
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

//routes
app.use('/url', checkForAuthentication, urlRoute);
app.use('/auth', authRoute);
app.use('/job', checkForAuthentication,jobRoute);


app.get("/:shortId", async (req, res) => {
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
  res.redirect(entry.redirectUrl);
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});