'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let errorHandler = require('./error-handler').config;

let app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  return next();
};

app.use(allowCrossDomain);

// Load routes
app.use('/', require('../routes/index')());

// Setup error handling
errorHandler(app);

module.exports = app;