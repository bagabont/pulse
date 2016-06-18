'use strict';

let pulseController = require('./beat-controller');
let router = require('express').Router();

router.post('/beats', pulseController.add);
router.get('/beats', pulseController.getAll);

module.exports = () => router;
