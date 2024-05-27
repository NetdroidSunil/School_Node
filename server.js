'use strict'
require("dotenv").config();;
const mongoose = require('mongoose');
const mongolib = require('./config.js/dbConnection')

const express = require('express');
const app = express();
const router = require('./router')  
const bodyParser = require('body-parser')


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,token ,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    next();
});

app.use(bodyParser.json());
app.use('/api', router)

var listener = app.listen(3000, function () {
    console.log('Listening on port ' + listener.address().port);
});