const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const cors = require('cors')

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express()

require('./src/initDB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(cookieParser())

app.use(session({
    name: 'session',
    keys: ['some secret value, changeme'],
}));

app.use(passport.initialize());
app.use(passport.session());

const User = require('./src/models/User');

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// require('./src/initPassport')

app.use('/api/auth', require('./src/api/auth'))
app.use('/api/languages', require('./src/api/languages'))

const port = 3001
app.listen(port, () => console.log(`Server is running on port ${port}!`))
