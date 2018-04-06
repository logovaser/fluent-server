const express = require('express')
const router = express.Router()
const Language = require('../models/Language')
const User = require('../models/User')


router.get('/find', function (req, res) {
    User.update(
        {_id: req.userId},
        {$addToSet: {language: req.params.id}},
        (err, doc) => res.sendStatus(err ? 404 : 200),
    );
})

module.exports = router;
