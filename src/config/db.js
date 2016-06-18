'use strict';

let mongoose = require('mongoose');
let log = require('./log');
let config = require('./config');

exports.connect = () => {

    let dbSource = config.connectionString;
    mongoose.connect(dbSource);

    return mongoose.connection
        .on('error', err => log.error('Database failed to connect to: %s. Error: %s', dbSource, err))
        .once('open', () => log.info('Database connected to %s', dbSource));
};
