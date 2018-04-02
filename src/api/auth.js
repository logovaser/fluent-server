const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const CONFIG = require('../config/dev')


router.post('/login', function (req, res) {
    const {username, password} = req.body;
    if (!username || !password) return res.status(400).send();

    User.findOne({username}, function (err, user) {
        if (err) throw err;
        if (user) {
            if (bcrypt.compareSync(password, user.hash)) {
                const token = jwt.sign({id: user.id}, CONFIG.SECRET_KEY, {expiresIn: 60});

                res.json({
                    type: 'success',
                    message: 'Enjoy your token!',
                    token: token
                });
            } else res.status(403).send()
        } else res.status(403).send()
    });
});

router.post('/register', function (req, res) {
    const {username, password} = req.body;
    if (!username || !password) return res.status(400).send();

    new User({
        username,
        hash: bcrypt.hashSync(password, bcrypt.genSaltSync())
    }).save();

    res.json({type: 'success'})
});

router.post('/check', function (req, res) {
    res.json({type: 'success'});
});


module.exports = router;
