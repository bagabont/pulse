'use strict';

var pulseController = require('./beat-controller');
var router = require('express').Router();

router.post('/beats', pulseController.add);
router.get('/beats', pulseController.getAll);

module.exports = function() {
    return  router
};
