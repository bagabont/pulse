'use strict';

let pulse = require('../controllers/pulse-controller');
let router = require('express').Router();

module.exports = () => {
  router.get('/beats/:video_id/:user_id', pulse.get);
  router.post('/beats', pulse.record);
  return router;
};