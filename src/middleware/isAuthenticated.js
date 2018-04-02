const jwt = require('jsonwebtoken');
const CONFIG = require('../config/dev')

module.exports = function (req, res, next) {

    const token = req.body.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, CONFIG.SECRET_KEY, (err, decoded) => {
            if (!err) {
                req.isAuthenticated = true;
                req.userId = decoded.id;
            }
        });
    }
    next();
};
