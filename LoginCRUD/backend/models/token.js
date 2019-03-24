const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    token: string
});

//Changes are in api.js, token.js, controller.js, auth.service

module.exports = mongoose.model('Token', tokenSchema);