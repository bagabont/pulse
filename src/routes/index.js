'use strict';

let pulse = require('../controllers/pulse-controller');
let router = require('express').Router();

module.exports = () => {
  router.get('/beats', pulse.getAllPulses);
  router.get('/beats/:video_id/:user_id', pulse.getVideoPulse);
  router.get('/beats/:video_id', pulse.getVideoPulse);
  router.post('/beats', pulse.record);
  return router;
};