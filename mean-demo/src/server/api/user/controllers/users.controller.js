'use strict';

var User = require('../models/users.model.js');

/**
 * Creates a new user
 */
exports.registerUser = function(req, res, next) {

  var user = new User({
      first_name: req.body.first_name,
      last_name : req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  });
  user.save(function (err, result) {
      if (err) {
          res.status(500).send(err);
      }
      else {
        res.status(201).json({
            status: 'success',
            data: result
        });
      }
  });
};

exports.doLogin = function(req, res, next) {
   User.findOne({
        username: req.body.username
    }).select('first_name username password').exec(function (err, user) {
        if (err) {
          res.status(500).send(err);
        }
        if (!user) {
            res.status(404).send({
              status: 'failure',
              message: "User doesn't exist"
            });
        } else if (user) {
            var validPassword = user.comparePassword(req.body.password);
            if (!validPassword) {
                res.status(401).send({
                  status: 'failure',
                  message: "Invalid password"
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    'data': user
                });
            }
        }
    });
}

/**
 * Get list of users
 */
exports.getAllUsers = function(req, res) {
  User.find({}, '-username -password', function(err, users) {
    if (err) return res.status(500).send(err);
    res.status(200).json({
      'status': 'success',
      'data':users
    });
  });
};

/**
 * Get user by id
 */
exports.getUserById = function(req, res) {
  var userId = req.params.id;

  User.findOne({"_id":userId},function(err, user) {
    if (err) return res.status(500).send(err);
    if (!user) {
      res.status(401).json({
        'status': 'failure',
        'message':"User doesn't exist"
      });
    }
    else {
      res.status(200).json({
        'status': 'success',
        'data':user
      });
    }
  });
};


/* Method for update user information */
exports.updateUser=function (req, res){
    var post_data = req.body;
    
    User.findOne({_id:post_data._id}).select("+password").exec(function(err,usr){
        if (err) {
           res.status(500).send(err);
        }
        else {
          usr.password = post_data.password;
          usr.first_name = post_data.first_name;
          usr.last_name = post_data.last_name;
          usr.email = post_data.email;

          usr.save(function(err,response){
              if(err)
                  res.staus(500).send(err);
              else {
                res.status(200).json({
                  'status': 'success',
                  'data':response
                });
              }
          });
        }
    });
}

/* Method for update user information */
exports.deleteUser=function (req, res){
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) {
      return res.staus(500).send(err);
    }
    else {
      res.status(200).json({
        'status': 'success',
        'data':user
      });
    }
  });
}