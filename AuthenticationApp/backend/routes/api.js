const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const ctrl = require('../controller/controller');

mongoose.connect('mongodb://localhost:27017/Ausers', { useNewUrlParser: true }, err => {
    if (err) {
        console.error('Error!'+err);
    } else {
        console.log('Connected To Mongodb');
    } 
});

router.get('/', ctrl.getApi);

router.post('/register', ctrl.registerdUser);

router.post('/login', ctrl.loginUser);

router.get('/events', ctrl.getEvent);

router.get('/special', ctrl.verify, ctrl.getSpecialEvent);

module.exports = router;