const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./routes/api');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const  cookieParser = require('cookie-parser');
const abc = require('./routes/api');

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

var LocalStorage = require('node-localstorage').LocalStorage
    localStorage = new LocalStorage('./scratch');


app.use(passport.initialize());
app.use(passport.session());

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
