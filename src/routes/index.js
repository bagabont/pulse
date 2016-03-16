'use strict';

let pulseController = require('../controllers/pulse-controller');
let router = require('express').Router();

module.exports = () => {

  router.get('/beats', pulseController.findBeats);

  router.get('/beats/:rid', pulseController.getById);

  router.post('/beats/:rid', pulseController.add);

  router.get('/beats/:rid/:key', pulseController.getByKey);

  return router;
};