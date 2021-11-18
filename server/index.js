const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4005;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.use('/js', express.static(path.join(__dirname, '../client/main.js')))
app.use('/css', express.static(path.join(__dirname, '../client/stylesheet.css')));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

