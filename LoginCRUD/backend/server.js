const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./routes/api');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const abc = require('./routes/api');

const config = require('./config/config.json');

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

let LocalStorage = require('node-localstorage').LocalStorage
    localStorage = new LocalStorage('./scratch');


app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use(bodyparser.json());

const xyz = require('./routes/facebookroute');

app.use('/facebook',xyz);

app.use('/issues',abc);

app.get('/',(req,res) => {
    res.send('hii');
});

app.listen(config.development.node_port,()=> {
    console.log(`live on ${config.development.config_id} mode, port: ${config.development.node_port}`);
});
