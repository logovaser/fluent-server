const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())

require('./src/initDB')
require('./src/initPassport')

app.use('/api/auth', require('./src/api/auth'))
app.use('/api/languages', require('./src/api/languages'))

const port = 3001
app.listen(port, () => console.log(`Server is running on port ${port}!`))
