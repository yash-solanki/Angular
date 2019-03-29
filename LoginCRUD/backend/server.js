const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./routes/api');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const  cookieParser = require('cookie-parser');
const abc = require('./routes/api');
var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');


  const {google} = require('googleapis');
  const url = require('url');
  const ls= require('local-storage');
  let configAuth = require('./oath.json');


  
  const passport = require('passport');
  const FacebookStrategy = require('passport-facebook').Strategy;
  const auth = require('./pass.json');
  

app.use(cors());

app.use(cookieParser());

app.use(bodyparser.json());

app.use('/issues',abc);

app.get('/',(req,res) => {
    res.send('hii');
});

app.listen(4040,()=> {
    console.log("live on port: 4040");
});





const googleConfig = {
    clientId: configAuth.web.client_id,
    clientSecret: configAuth.web.client_secret,
    redirect: configAuth.web.redirect_uris
};

const oauth2Client = new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
);

function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}

const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/contacts.readonly'

  ];

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
}

function urlGoogle() {
    const auth = createConnection();
    const url = getConnectionUrl(auth);
    return url;
}


app.get('/checkauth', (req,res) => {
    res.redirect(urlGoogle());
});

app.get('/redirect', async (Request,Response) => {
    const {tokens} = await oauth2Client.getToken(Request.query.code);
    oauth2Client.setCredentials(tokens);
    ls.set('rtoken',tokens);

    Response.redirect('/contact'); 

});
app.get('/contact',function(red,response){
    oauth2Client.setCredentials(ls.get('rtoken'));
    const peopleService = google.people({
      version: 'v1', 
      auth: oauth2Client
    });
 
    peopleService.people.connections.list({
        resourceName: 'people/me',
        personFields: 'emailAddresses,names,phoneNumbers'
        },(err, res) => {
           if(err)
           {
             console.log(err);
           }
           else
           {
            let userData = res.data.connections;
             let userDetail=[];
             if(userData) {
         	    userData.forEach(people=>{
                    console.log(people.names[0].displayName);
                userDetail.push({
                    personName:people.names[0].displayName,
                    contectNo: people.phoneNumbers[0].value
                })  
            });
           }
           response.send(userDetail);
        }
    });
  });






app.use(passport.initialize());
app.use(passport.session());

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

app.get('/auth/facebook',
    passport.authenticate('facebook', {scope:["email"]}));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        failureRedirect: '/fail',
        successRedirect: 'http://localhost:4200/list'
}));

app.get('/fail', (req, res) => {
    res.send('fail');
});

app.get('/success', (req, res) => {
    res.send('Successfull');
});

app.get('/', (req, res) => {
    res.redirect('/auth/facebook');
});


