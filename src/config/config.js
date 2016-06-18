'use strict';

module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3005,
    connectionString: process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/heartbeat',
};
