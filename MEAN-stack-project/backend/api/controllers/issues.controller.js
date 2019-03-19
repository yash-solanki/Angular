'use strict';

let Issue = require('../models/issues.model');


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
    console.log('rwo');
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
