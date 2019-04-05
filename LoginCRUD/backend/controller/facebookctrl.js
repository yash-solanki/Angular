const express = require('express');
const app = express();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const auth = require('../pass.json');



passport.use(new FacebookStrategy({
    clientID: auth.web.clientID,
    clientSecret: auth.web.clientSecret,
    callbackURL: auth.web.callbackURL
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

exports.auth = passport.authenticate('facebook', {scope:["email"]});

// app.get('/auth/facebook',
//     passport.authenticate('facebook', {scope:["email"]}));

exports.callback = passport.authenticate('facebook', {
    failureRedirect: '/fail',
    successRedirect: 'http://localhost:4200/list'
});

// app.get('/auth/facebook/callback',
//     passport.authenticate('facebook', {
//         failureRedirect: '/fail',
//         successRedirect: 'http://localhost:4200/list'
// }));

// app.get('/fail', (req, res) => {
//     res.send('fail');
// });



// app.get('/', (req, res) => {
//     res.redirect('/auth/facebook');
// });