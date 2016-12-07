'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('../config/error-handler');
var config = require('../config/config');
var app = express();

app.disable('x-powered-by');
app.set('port', config.port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var allowCrossDomainMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    return next();
};

app.use(allowCrossDomainMiddleware);

// Load routes
app.use('/', require('./beats')());

// Setup error handling
errorHandler.config(app);

module.exports = app;
