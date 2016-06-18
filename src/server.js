'use strict';

let api = require('./api');
let db = require('./config/db.js');
let http = require('http');
let config = require('./config/config');
let log = require('./config/log');

let server = http.createServer(api);

server.listen(config.port, () => {
    log.info('[%s] Heartbeat API Server listening on port %s...', config.environment, config.port);
    db.connect();
});
