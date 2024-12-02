const express = require('express');
const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");

let code = require('../pair'); // Adjust the path as necessary

app.use('/code', code);

app.use('/', async (req, res, next) => {
    res.sendFile(__path + '/pair.html'); // Ensure `pair.html` is within the deployment scope
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app; // Export the app