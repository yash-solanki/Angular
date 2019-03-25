'use strict';

let User = require('../models/user');
let Issue = require('../models/issue');
const jwt = require('jsonwebtoken');
var LocalStorage = require('node-localstorage').LocalStorage;
let localStorage = new LocalStorage('./scratch');

exports.verify = function verifyToken( req, res, next ) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    // let token = req.headers.authorization.split(' ')[1];
    let token = localStorage.getItem('token');
    console.log(token);
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


exports.getAllIssues = function(req,res) {
    console.log('one');
    Issue.find((err,issues) => {
        if (err) {
            console.log(err);
        } else {
            res.json(issues);
        }
    });
};


exports.getIssueById = function(req,res) {
    console.log('two');
    console.log(req.params.id);
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
};


exports.addIssue = function(req,res) {
    console.log('three');
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue':'Added Successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
}


exports.updateIssueById = function(req,res) {
    console.log('four');
    Issue.findById(req.params.id, (err,issue) => {
        if (!issue) {
            return next(new Error('Could not load document'));
        } else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save()
                .then(issue => {
                    res.json(issue);
                })
                .catch(err => {
                    res.status(400).send('Update Failed');
                });
        }
    });
}


exports.deleteIssueById = function(req,res) {
    
    console.log('five');
    Issue.findByIdAndRemove({_id: req.params.id}, (err,issue) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Remove Successfully');
        }
    });
}

exports.RegisterUser = function (req,res) {
    let user = new User();
    let userData = req.body;
        userData.password = user.generateHash(userData.password);
    let newUser = new User(userData);
    console.log(newUser);
    newUser.save((error,registerdUser) => {
        if(error) {
            console.log(error);
        } else {
            let payload = { subject: registerdUser._id }
            var token = jwt.sign( payload, 'secretkey');
            console.log(token);
            res.status(200).send({token});
        }
    });
};


exports.LoginUser = function(req,res) {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        console.log('Login');
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid email');
            } else {
                if (!user.validPassword(userData.password)) { 
                    res.status(401).send('Invalid Password');
                } else {
                    console.log(user);
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretkey');

                    localStorage.setItem('token', token);

                    console.log(localStorage.getItem('token'));

                    res.status(200).send({token});
                }
            }
        }
    });
};

exports.GetToken = function(req,res) {
    console.log(localStorage.getItem('token'));
    res.send(JSON.stringify(localStorage.getItem('token')));
};

exports.LogoutUser = function(req,res) {
    console.log("KBKJBKJB");
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
    res.send(JSON.stringify("logout"));
};
