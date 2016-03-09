'use strict';

let Beat = require('../models/beat');

module.exports.record = function (req, res, next) {
  let beat = req.body;
  let query = {
    'user_id': beat.user_id,
    'video_id': beat.video_id
  };
  Beat.update(query, beat, {upsert: true}, function (err, data) {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(204).send();
  });
};

module.exports.get = function (req, res, next) {
  let query = {
    'user_id': req.params.user_id,
    'video_id': req.params.video_id
  };
  Beat.findOne(query, function (err, data) {
    if (err) {
      return next(err);
    }
    if (!data) {
      return res.status(404).send();
    }
    let beat = data.toObject();
    delete beat._id;
    return res.json(beat);
  });
};