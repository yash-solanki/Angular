// const facectrl = require('../controller/facebookctrl');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Jwt=require('jsonwebtoken');


const FacebookStrategy = require('passport-facebook');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

//  PASSPORT Facebook
passport.use(new FacebookStrategy({
    clientID: '861017947402225',
    clientSecret: 'e795fa45776390ca769b0291a73e64b0',
    callbackURL: "/facebook/redirect"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

let fbtoken;
router.get('/faceauth',
    passport.authenticate(
        'facebook',
        { 
          scope: ['user_friends', 'manage_pages']
        }
));

router.get('/redirect',
    passport.authenticate(
        'facebook',
        {
            failureRedirect: 'http://localhost:4200'
        }),
    function(req, res) {
      console.log(req.user);
      res.redirect('/facebook/loginfb');
});

router.get('/loginfb', (req, res) => {
    console.log('hii from login fb');
    const token=Jwt.sign({payload:fbtoken},'secret');
    console.log(token);
    res.redirect(`http://localhost:4200/login?token=${token}`);
});

module.exports = router;