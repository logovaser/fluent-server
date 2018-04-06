const express = require('express')
const router = express.Router()
const Language = require('../models/Language')
const User = require('../models/User')


router.get('/languages', function (req, res) {
    User.findById(req.userId, (err, user) => res.json(user.languages));
})

router.post('/languages/:id', function (req, res) {
    User.update(
        {_id: req.userId},
        {$addToSet: {language: req.params.id}},
        (err, doc) => res.sendStatus(err ? 404 : 200),
    );
})

router.delete('/languages/:id', function (req, res) {
    let languageId = req.params.id;
    User.update({_id: req.userId}, {$pullAll: {languages: [languageId]}}, (err, doc) => {
        res.sendStatus(err ? 404 : 200);
    });
})

router.get('/friends', function (req, res) {
    User.findById(req.userId, (err, user) => res.json(user.friends));
})

router.post('/friends/:id', function (req, res) {
    User.update(
        {_id: req.userId},
        {$addToSet: {friends: req.params.id}},
        (err, doc) => res.sendStatus(err ? 404 : 200),
    );
})

router.delete('/friends/:id', function (req, res) {
    User.update(
        {_id: req.userId},
        {$pullAll: {friends: [req.params.id]}},
        (err, doc) => res.sendStatus(err ? 404 : 200),
    );
})

module.exports = router;
