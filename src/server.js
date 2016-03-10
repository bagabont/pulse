'use strict';

let app = require('./config/express.js');
let db = require('./config/db.js');
let http = require('http');
let https = require('https');
let config = require('./config/config');

let server;
if (config.checkIsSecured()) {
  let serverOptions = config.certData ? {pfx: config.certData, passphrase: config.certPass} : {};
  server = https.createServer(serverOptions, app);
} else {
  server = http.createServer(app);
}

server.listen(config.port, () => {
  console.log('Heartbeat Server (%s, %s) listening on port %s ...', config.checkIsSecured() ? 'HTTPS' : 'HTTP', config.environment, config.port);
  db.connect(config.connectionString);
});