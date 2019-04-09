const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const controller = require('../controller/controller');
const socialctrl = require('../controller/googlectrl');
const facectrl = require('../controller/facebookctrl');

mongoose.connect('mongodb://localhost:27017/Ausers', { useNewUrlParser: true }, err => {
    if (err) {
        console.error('Error!'+err);
    } else {
        console.log('Connected To Mongodb');
    } 
});

mongoose.connect('mongodb://127.0.0.1/issues',{ useNewUrlParser: true }, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to Database');
    }
});

// Google Path

router.get('/checkauth', socialctrl.checkauth);

router.post('/passToken', controller.verify, socialctrl.dealWithToken);


// Facebook Path

// router.get('/faceauth', facectrl.faceauth);

// router.get('/faceredirect', facectrl.faceredirect);

// router.get('/loginfb', facectrl.loginfb);

//Login
router.post('/logout', controller.LogoutUser);

router.get('/token', controller.GetToken);

router.post('/register', controller.RegisterUser);

router.post('/login', controller.LoginUser);

//CRUD
router.get('/',controller.verify, controller.getAllIssues);

router.get('/:id', controller.verify, controller.getIssueById);

router.post('/', controller.verify ,controller.addIssue);

router.put('/:id', controller.verify ,controller.updateIssueById);

router.delete('/:id', controller.verify ,controller.deleteIssueById);

module.exports = router;