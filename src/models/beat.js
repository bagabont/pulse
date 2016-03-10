var mongoose = require('mongoose');

var BeatSchema = new mongoose.Schema({
  date_created: {type: Date, required: true},
  date_modified: {type: Date, required: true},
  pointer: {type: Number, required: true},
  user_id: {type: String, required: true},
  resource_id: {type: String, required: true}
});

BeatSchema.pre('save', function (next) {
  var now = Date.now();
  if (!this.date_created) {
    this.date_created = now;
  }
  this.date_modified = now;
  next();
});

BeatSchema.pre('update', function (next) {
  this.date_modified = Date.now();
  next();
});

module.exports = mongoose.model('Beat', BeatSchema);