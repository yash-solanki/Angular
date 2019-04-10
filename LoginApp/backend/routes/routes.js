const express = require('express');
const router = express.Router();
// const User = require('../models/user');
const mongoose = require('mongoose');
const ctrl = require('../controller/controller');

mongoose.connect("mongodb://localhost:27017/People", { useNewUrlParser: true }, err => {
    if (err) {
        console.error('Error!'+err);
    } else {
        console.log('Mongodb connected');
    }
});

router.get('/', ctrl.getUser);

router.post('/adduser', ctrl.addUser);

router.get('/:id', ctrl.getUserById);

router.put('/:id', ctrl.updateUser);

router.delete('/:id', ctrl.deleteUser);

module.exports = router;
