const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./routes/api');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const abc = require('./routes/api');
const crypto = require('crypto');

app.use(cors());

app.use(bodyparser.json());

app.use('/issues',abc);

app.get('/',(req,res) => {
    res.send('hii');
});

app.listen(4040,()=> {
    console.log("live on port: 4040");
});