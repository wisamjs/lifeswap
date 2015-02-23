/*global process, console*/

'use strict';
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var apiRouter = require('./lib/api-router');
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//CORS support
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
});

app.use('/api', apiRouter);

var server = app.listen(port);
console.log('-------------------------------');
console.log('server is running on port: ' + port);