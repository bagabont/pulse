'use strict';

var log = require('../../config/log');
var Beat = require('./beat');

module.exports.add = function(req, res, next) {

    var content = req.body;
    var query = { 'user': content.user, 'key': content.key };

    Beat.update(query, content, { upsert: true, new: true }, function(err, data) {
        if (err) {
            return res.status(400).send(err);
        }
        log.info(data)
        if (!data) {
            return res.status(400).send(err);
        }
        return res.status(204).send();
    });
};

module.exports.getAll = function(req, res, next) {

    var query = {};

    if (req.query.user) {
        query.user = req.query.user;
    }
    if (req.query.key) {
        query.key = req.query.key;
    }

    Beat.find(query, function(err, data) {
        if (err) {
            return next(err);
        }
        res.json(!data ? [] : data);
    });
};
