const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
const port = process.env.PORT || 4005;


//Rollbar implementation for tracablitly

const {test,crit,warning} = require('./controllers/controller');
//get the html file when someone pings the direct endpoint
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
    //rollbar.info("Sent main html file", {context:`sent to user ${req.ip}`});
});

app.get('/hitem',test);

app.get('/criticalErr',crit);
app.get('/warning',warning);
//send back the js and css files for the html main file
app.use('/js', express.static(path.join(__dirname, '../client/main.js')))
app.use('/css', express.static(path.join(__dirname, '../client/stylesheet.css')));


//open the server on the port that is supplied
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

