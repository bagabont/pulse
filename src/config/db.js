'use strict';

var mongoose = require('mongoose');
var log = require('./log');
var config = require('./config');

exports.connect = () => {

    var dbSource = config.connectionString;
    mongoose.connect(dbSource);

    return mongoose.connection
        .on('error', err => log.error('Database failed to connect to: %s. Error: %s', dbSource, err))
        .once('open', () => log.info('Database connected to %s', dbSource));
};
