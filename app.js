const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

const TEST_DATA = require('./TEST_DATA');

let router = express.Router();

router.get('/languages', function (req, res) {
    res.json(TEST_DATA.languages)
})

app.use('/api', router);

const port = 3001
app.listen(port, () => console.log(`Server is running on port ${port}!`));
