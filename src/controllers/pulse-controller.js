'use strict';

let Beat = require('../models/beat');

module.exports.add = (req, res, next)=> {
  let data = req.body;
  data.resource_id = req.params.rid;
  let query = {'user_id': data.user_id, 'resource_id': data.resource_id};
  Beat.update(query, data, {upsert: true}, (err, doc)=> {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(204).send();
  });
};

module.exports.getById = (req, res, next)=> {
  let query = {'resource_id': req.params.rid};
  Beat.find(query, (err, data)=> {
    if (err) {
      return next(err);
    }
    if (!data) {
      return res.status(404).send();
    }
    let beats = [];
    data.forEach(item=> {
      let beat = item.toObject();
      delete beat._id;
      delete beat.resource_id;
      beats.push(beat);
    });
    res.json(beats);
  });
};

module.exports.getByUser = (req, res, next) => {
  let query = {
    'user_id': req.params.uid,
    'resource_id': req.params.rid
  };
  Beat.findOne(query, (err, data)=> {
    if (err) {
      return next(err);
    }
    if (!data) {
      return res.status(404).send();
    }
    return res.json({pointer: data.pointer});
  });
};


module.exports.findBeats = (req, res, next) => {
  var query = {};
  if (req.query.uid) {
    query.user_id = req.query.uid;
  }
  Beat.find(query, (err, data) => {
    if (err) {
      return next(err);
    }
    if (!data) {
      return res.status(404).send();
    }
    let beats = [];
    data.forEach(item=> {
      let beat = item.toObject();
      delete beat._id;
      beats.push(beat);
    });
    res.json(beats);
  });
};
