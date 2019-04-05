const {google} = require('googleapis');
const url = require('url');
const configAuth = require('../oath.json');
const userModel = require('../models/social'); 
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());


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
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.profile',
];

const gurl = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
    prompt:'consent',
    // If you only need one scope you can pass it as a string
    scope: defaultScope
  });

exports.dealWithToken = (req, res) => {
    console.log('from google');
    console.log(req.body.token);
    return true;
}
  
exports.checkauth = (req,res) => {
    // res.redirect(gurl);
    res.send({ result: true, gurl:gurl });
};
