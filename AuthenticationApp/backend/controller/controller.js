const User = require('../models/user');
const jwt = require('jsonwebtoken');
exports.verify = ( req, res, next ) => {
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
};

exports.getApi = (req,res) => {
    res.send('from api');
};

exports.registerdUser = (req,res) => {
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
}

exports.loginUser = (req,res) => {
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
};

exports.getEvent = (req,res) => {
    let events = [
        {
            "_id":"1",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"2",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"3",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"4",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"5",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"6",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        }
    ]

    res.json(events);
}


exports.getSpecialEvent = (req,res) => {
    let events = [
        {
            "_id":"1",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"2",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"3",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"4",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"5",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        },
        {
            "_id":"6",
            "name":"Abc",
            "description": "ecdsdfewv",
            "date": "2010-10-25"
        }
    ]

    res.json(events);
}
