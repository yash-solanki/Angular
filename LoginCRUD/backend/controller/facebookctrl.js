const express = require('express');
const app = express();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const auth = require('../pass.json');
const Jwt = require('jsonwebtoken');

// passport.use(new FacebookStrategy({
//     clientID: '861017947402225',
//     clientSecret: 'e795fa45776390ca769b0291a73e64b0',
//     callbackURL: 'http://localhost:4040/auth/facebook/redirect'
// },
//     function (accessToken, refreshToken, profile, done) {
//         done(null, profile);
//     }
// ));

passport.use(new FacebookStrategy({
    clientID: auth.web.clientID,
    clientSecret: auth.web.clientSecret,
    callbackURL: auth.web.callbackURL
    },
    function (accessToken, refreshToken, profile, done) {
        // console.log(profile);
        done(null, profile);
        
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    mongodb.findById(id).then((user) => {
        done(null, user);
    });
});

let fbtoken;

exports.faceauth = passport.authenticate('facebook',{ scope: ['user_friends', 'manage_pages'] });

exports.faceredirect = passport.authenticate('facebook', { failureRedirect: 'http://localhost:4200' }),
                    function(req, res) {
                        console.log(req.user);
                        fbtoken=req.user.fbId
                        res.redirect('/auth/loginfb');
                    }

exports.loginfb = (req, res) => {
    const token=Jwt.sign({payload:fbtoken},'secret');
    console.log(token);
    res.redirect(`http://localhost:4200/login?token=${token}`);
};    
