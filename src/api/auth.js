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
                const token = jwt.sign({id: user.id}, CONFIG.SECRET_KEY, {expiresIn: 1000});

                res.cookie('x-access-token', token, { httpOnly: true })
                    .status(200)
                    .send();
            } else res.status(403).send()
        } else res.status(403).send()
    });
});

router.post('/register', function (req, res) {
    const {username, password} = req.body;
    if (!username || !password) return res.status(400).send();

    const user = new User({
        username,
        hash: bcrypt.hashSync(password, bcrypt.genSaltSync())
    });
    user.save();

    res.json({type: 'success', user})
});


module.exports = router;
