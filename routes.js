// 1. Include config and modules
const config = require('./config');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const Auth = require('./controllers/auth.js');
const People = require('./controllers/people.js');
const Coin = require('./pg/coin.js');
const User = require('./models/user');

// 2. Authentication Middleware
function ensureAuthenticated(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({ error: 'TokenMissing' });
    }
    const token = req.headers.authorization.split(' ')[1];

    let payload = null;
    try {
        payload = jwt.decode(token, config.TOKEN_SECRET);
    }
    catch (err) {
        return res.status(401).send({ error: "TokenInvalid" });
    }

    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ error: 'TokenExpired' });
    }
    // check if the user exists
    User.findById(payload.userId, function(err, person){
        if (!person){
            return res.status(404).send({error: 'PersonNotFound'});
        } else {
            req.user = payload;
            next();
        }
    });
}

// 3. Routes
module.exports = function (app) {
    // 4. Authentication Routes
    app.post('/auth/login', Auth.login);
    app.post('/auth/signup', Auth.signup);

    // 5. Application Routes
    app.get('/people', ensureAuthenticated, People.list);
    app.get('/people/page/:page', ensureAuthenticated, People.list);
    app.get('/people/:id', ensureAuthenticated, People.show);
    app.get('/profile', ensureAuthenticated, People.profile);

    app.get('/coin', ensureAuthenticated, Coin.list);
    app.get('/coin/:id', ensureAuthenticated, Coin.show);
};
