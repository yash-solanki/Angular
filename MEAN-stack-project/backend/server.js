const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Issue = require('./models/Issue'); 

const app = express();

const  router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/issues');

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('MongoDB database connection establish successfully!!!');
});

router.route('/issues').get((req,res) => {
    Issue.find((err,issues) => {
        if (err) {
            console.log(err);
        } else {
            res.json(issues);
        }
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
});

router.route('/issues/add').post((req,res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue':'Added Successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/issues/update/:id').post((req,res) => {
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
                    res.json('Update Done');
                })
                .catch(err => {
                    res.status(400).send('Update Failed');
                });
        }
    });
});

router.route('/issues/delete/:id').get((req,res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err,issue) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Remove Successfully');
        }
    })
});

app.use('/',router);

app.listen(3000, ()=> {
    console.log("live on port:3000");
});