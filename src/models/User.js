const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    username: String,
    hash: String,

    languages: [{ type: Schema.Types.ObjectId, ref: 'Language' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}));
