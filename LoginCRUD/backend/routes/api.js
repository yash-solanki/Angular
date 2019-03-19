const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const controller = require('../controller/controller');

// mongoose.connect('mongodb://localhost:27017/Ausers', { useNewUrlParser: true }, err => {
//     if (err) {
//         console.error('Error!'+err);
//     } else {
//         console.log('Connected To Mongodb');
//     } 
// });

mongoose.connect('mongodb://127.0.0.1/issues',{ useNewUrlParser: true }, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to Database');
    }
});

router.get('/', controller.getAllIssues);

router.get('/:id',controller.getIssueById);

router.post('/add',controller.addIssue);

router.put('/update/:id',controller.updateIssueById);

router.delete('/delete/:id',controller.deleteIssueById);

//Login App
router.post('/register', controller.RegisterUser);

router.post('/login', controller.LoginUser);


module.exports = router;