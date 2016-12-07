'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let errorHandler = require('../config/error-handler');
let config = require('../config/config');
let app = express();

app.disable('x-powered-by');
app.set('port', config.port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let allowCrossDomainMiddleware = (req, res, next) => {
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
