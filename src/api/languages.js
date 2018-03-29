const express = require('express')
const router = express.Router()

const TEST_DATA = require('../../TEST_DATA')


router.get('/', function (req, res) {
    res.json(TEST_DATA.languages)
})

router.patch('/', function (req, res) {
    let index = -1;
    TEST_DATA.languages.forEach((lang, i) => {
        if (lang.id === req.body.id) index = i
    })
    if (index < 0) return
    TEST_DATA.languages[index] = req.body
    res.json(TEST_DATA.languages)
})

module.exports = router;
