const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({});

User.plugin(passportLocalMongoose);

try {
    module.exports = mongoose.model('Users', User);
}
catch (e) {
    module.exports = mongoose.model('Users');
}
