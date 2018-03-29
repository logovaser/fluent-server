const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../models/User')


router.get('/login', () => {
    let authenticate = User.authenticate();
    authenticate('username', 'password', function(err, result) {
        console.log(result, err)
    });
})

router.post('/register', () => {
    User.register({username:'username', active: false}, 'password', function(err, user) {
        console.log(user, err)

    });
})

module.exports = router;
