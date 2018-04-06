const mongoose = require('mongoose');

module.exports = mongoose.model('Language', new mongoose.Schema({
    name: String,
    iconSrc: String,
    speakerCount: Number,
}));
