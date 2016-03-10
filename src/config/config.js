'use strict';

let fs = require('fs');

module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3005,
  connectionString: process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/heartbeat',
  certData: process.env.CERT_PATH ? fs.readFileSync(process.env.CERT_PATH) : undefined,
  certPass: process.env.CERT_PASS,
  checkIsSecured: function () {
    return this.certData !== undefined && this.certPass !== undefined
  }
};