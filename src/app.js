const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan  = require('morgan')

const app = express()

require('./init/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'));



app.use(require('./middleware/isAuthenticated'));
app.use('/api/auth', require('./api/auth'))
app.use('/api/languages', require('./api/languages'))
app.use('/api/user', require('./api/user'))

const port = 3001
app.listen(port, () => console.log(`Server is running on port ${port}!`))
