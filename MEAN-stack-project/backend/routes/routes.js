'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../api/controllers/issues.controller');


router.get('/', controller.getAllIssues);

router.get('/:id',controller.getIssueById);

router.post('/add',controller.addIssue);

router.put('/update/:id',controller.updateIssueById);

router.delete('/delete/:id',controller.deleteIssueById);

module.exports = router;
