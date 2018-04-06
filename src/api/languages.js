const express = require('express')
const router = express.Router()
const Language = require('../models/Language')


Language.count({}, (err, count) => {
    if (count === 0) {
        Language.create({
            name: 'English',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/gb.svg',
            speakerCount: 4234,
        });
        Language.create({
            name: 'Ukrainian',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/ua.svg',
            speakerCount: 104,
        });
    }
})

router.get('/', function (req, res) {
    Language.find({}, (err, languages) => res.json(languages))
})

router.patch('/', function (req, res) {
    let newItem = req.body;

    Language.findByIdAndUpdate(newItem.id, newItem, {new: true}, (err, language) => res.json(language));
})

module.exports = router;
