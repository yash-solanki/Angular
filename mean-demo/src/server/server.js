/**
 * Express configuration
 */

'use strict';

var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	mongoose = require('mongoose');


var app = express(),
	environment = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	config = require(path.join(__dirname, './config/' + environment )); 

/**
 * Connecting to MongoDB using Mongoose.
 */
mongoose.connect(config.mongo.url, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to database");
    }
});

app.use('/',express.static(__dirname + '/../client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

require('./routes')(app);

app.listen(config.server.port);
console.log('Server started on port: '+config.server.port);

