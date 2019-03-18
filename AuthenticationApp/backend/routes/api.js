const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/Ausers', { useNewUrlParser: true }, err => {
    if (err) {
        console.error('Error!'+err);
    } else {
        console.log('Connected To Mongodb');
    } 
});

function verifyToken( req, res, next ) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if( token === 'null' ) {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretkey');
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}

router.get('/', (req,res) => {
    res.send('from api');
});

router.post('/register', (req,res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error,registerdUser) => {
        if(error) {
            console.log(error);
        } else {
            let payload = { subject: registerdUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token});
        }
    });
});

router.post('/login', (req,res) => {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid email');
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid Password');
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({token});
                }
            }
        }
    });
});

router.get('/events', (req,res) => {
    let events = [
        {
            "_id":"1",
            "name":"Abc",
            "description": "ecdsdfewv",
            "dete": "10/10/10"
        },
        {
            "_id":"2",
            "name":"Abc",
            "description": "ecdsdfewv",
            "dete": "10/10/10"
        },
        {
            "_id":"3",
            "name":"Abc",
            "description": "ecdsdfewv",
            "dete": "10/10/10"
        },
        {
            "_id":"4",
            "name":"Abc",
            "description": "ecdsdfewv",
            "dete": "10/10/10"
        }
    ]

    res.json(events);
});

router.get('/special', verifyToken, (req,res) => {
    let events = [
        {
            "_id":"1",
            "name":"Abc",
            "description": "ecdsdfewv",
            "dete": "10/10/10"
        },
        {
            "_id":"2",
            "name":"Abc",
            "description": "ecdsdfewv",
            "dete": "10/10/10"
        },
        {
            "_id":"3",
            "name":"Abc",
            "description": "ecdsdfewv",
            "dete": "10/10/10"
        },
        {
            "_id":"4",
            "name":"Abc",
            "description": "ecdsdfewv",
            "dete": "10/10/10"
        }
    ]

    res.json(events);
});


module.exports = router;