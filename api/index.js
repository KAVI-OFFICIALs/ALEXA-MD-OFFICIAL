const express = require('express');
const app = express();
const bodyParser = require("body-parser");

let code = require('../pair'); 
app.use('/code', code);

app.use('/', async (req, res) => {
    res.sendFile(__dirname + '/pair.html'); 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;