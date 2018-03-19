const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json())

const TEST_DATA = require('./TEST_DATA')

let router = express.Router()

router.get('/languages', function (req, res) {
    res.json(TEST_DATA.languages)
})

router.patch('/languages', function (req, res) {
    let index = -1;
    TEST_DATA.languages.forEach((lang, i) => {
        if (lang.id === req.body.id) index = i
    })
    if (index < 0) return
    TEST_DATA.languages[index] = req.body
    res.json(TEST_DATA.languages)
})

app.use('/api', router)

const port = 3001
app.listen(port, () => console.log(`Server is running on port ${port}!`))
