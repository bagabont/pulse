'use strict';

let pulseController = require('../controllers/pulse-controller');
let router = require('express').Router();

module.exports = () => {

  router.get('/beats', pulseController.getAllBeats);

  router.get('/beats/:rid', pulseController.getById);

  router.post('/beats/:rid', pulseController.add);

  router.get('/beats/:rid/:uid', pulseController.getByUser);

  return router;
};