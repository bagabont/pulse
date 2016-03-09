'use strict';

let mongoose = require('mongoose');

exports.connect = (dbSource) => {
  mongoose.connect(dbSource);
  return mongoose.connection
    .on('error', err => console.log('Database failed to connect to: %s. Error: %s', dbSource, err))
    .once('open', () => console.log('Database connected to %s', dbSource));
};