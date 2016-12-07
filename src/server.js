'use strict';

var api = require('./api');
var db = require('./config/db.js');
var http = require('http');
var config = require('./config/config');
var log = require('./config/log');

var server = http.createServer(api);

server.listen(config.port, function() {
    log.info('[%s] Heartbeat API Server listening on port %s...', config.environment, config.port);
    db.connect();
});