'use strict';

let Beat = require('../models/beat');

module.exports.record = (req, res, next)=> {
  let beat = req.body;
  let query = {
    'user_id': beat.user_id,
    'video_id': beat.video_id
  };
  Beat.update(query, beat, {upsert: true}, (err, data)=> {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(204).send();
  });
};

module.exports.getByVideo = (req, res, next)=> {
  let query = {'video_id': req.params.video_id};
  Beat.find(query, (err, data)=> {
    if (err) {
      return next(err);
    }
    if (!data) {
      return res.status(404).send();
    }
    res.json(parseBeats(data));
  });
};

module.exports.getUserPulse = (req, res, next) => {
  let query = {
    'user_id': req.params.user_id,
    'video_id': req.params.video_id
  };
  Beat.findOne(query, (err, data)=> {
    if (err) {
      return next(err);
    }
    if (!data) {
      return res.status(404).send();
    }
    return res.json({timestamp: data.timestamp});
  });
};

module.exports.getAllPulses = (req, res, next) => {
  Beat.find({}, (err, data) => {
    if (err) {
      return next(err);
    }
    if (!data) {
      return res.status(404).send();
    }
    res.json(parseBeats(data));
  });
};

function parseBeats(data) {
  let beats = [];
  data.forEach(item=> {
    let beat = item.toObject();
    delete beat._id;
    beats.push(beat);
  });
  return beats;
}