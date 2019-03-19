const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let abc = require('./routes/routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/issues',{ useNewUrlParser: true }, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to Database');
    }
});

app.use('/issues',abc);

app.listen(3000, ()=> {
    console.log("live on port:3000");
});