'use strict';

let app = require('./config/express.js');
let db = require('./config/db.js');
let http = require('http');

let server = http.createServer(app);
let env = process.env.NODE_ENV;
let port = process.env.PORT || 3000;
let connectionString = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/heartbeat';

server.listen(port, () => {
  console.log('Heartbeat Server (%s) listening on port %s ...', env, port);
  db.connect(connectionString);
});