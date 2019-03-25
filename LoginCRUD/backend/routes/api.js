const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const controller = require('../controller/controller');

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

router.post('/logout', controller.LogoutUser);

router.get('/', controller.verify, controller.getAllIssues);

router.get('/token', controller.GetToken);



router.get('/:id', controller.verify ,controller.getIssueById);



router.post('/', controller.verify ,controller.addIssue);

router.put('/:id', controller.verify ,controller.updateIssueById);

router.delete('/:id', controller.verify ,controller.deleteIssueById);

//Login App
router.post('/register', controller.RegisterUser);

router.post('/login', controller.LoginUser);





module.exports = router;