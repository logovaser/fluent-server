const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Language', new mongoose.Schema({
    name: String,
    iconSrc: String,
    speakerCount: Number,
}));
