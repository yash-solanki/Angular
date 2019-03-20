'use strict';

var express = require('express');
var controller = require('./controllers/users.controller.js');
var router = express.Router();

router.post('/register', controller.registerUser);

router.post('/login', controller.doLogin);

router.get('/', controller.getAllUsers);

router.put('/', controller.updateUser);

router.get('/:id', controller.getUserById);

router.delete('/:id', controller.deleteUser);

module.exports = router;
