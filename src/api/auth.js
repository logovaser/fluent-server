const express = require('express')
const router = express.Router()
const passport = require('passport');
const User = require('../models/User')


class kek {
    constructor() {

    }
}

@kek
router.get('/logout', function(req, res, next) {
    req.logout();
    res.send(200);
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    let authenticate = User.authenticate();
    let {username, password} = req.body;
    let authed = req.isAuthenticated();
    let user = req.user;
    next();
})

router.post('/register', (req, res) => {
    let {username, password} = req.body;
    User.register(new User({username}), password, function(err, result) {
        res.json(result)
    });
})

module.exports = router;
