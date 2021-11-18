const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
const port = process.env.PORT || 4005;


//Rollbar implementation for tracablitly
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'e52add0a647d4556a072c2b6b52cbf86',
  captureUncaught: true,
  captureUnhandledRejections: true
});

const {test} = require('./controllers/controller');
//get the html file when someone pings the direct endpoint
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
    rollbar.info("Sent main html file", {context:`sent to user ${req.ip}`});
});

app.get('/hitem',test);
//send back the js and css files for the html main file
app.use('/js', express.static(path.join(__dirname, '../client/main.js')))
app.use('/css', express.static(path.join(__dirname, '../client/stylesheet.css')));


//open the server on the port that is supplied
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

