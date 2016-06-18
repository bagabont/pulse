var mongoose = require('mongoose');

var BeatSchema = new mongoose.Schema({
    created: { type: Date, required: true },
    modified: { type: Date, required: true },
    user: { type: String, required: true },
    key: { type: String, required: true },
    value: { type: Number, required: true },
});

BeatSchema.pre('save', function(next) {
    var now = Date.now();
    if (!this.created) {
        this.created = now;
    }
    this.modified = now;
    next();
});

BeatSchema.pre('update', function(next) {
    this.modified = Date.now();
    next();
});

module.exports = mongoose.model('Beat', BeatSchema);
