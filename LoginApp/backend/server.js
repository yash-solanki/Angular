const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const bodyparser = require('body-parser');
const app= express();
const abc = require('./routes/routes');

app.use(bodyparser.json({type: 'application/json'}));
app.use(cors({
    origin: ['http://localhost:4200']
}));

app.use('/people', abc);

app.listen(3030,()=> {
    console.log("Login App Server Live On Port: 3030");
});