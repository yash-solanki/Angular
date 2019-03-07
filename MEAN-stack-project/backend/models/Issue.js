const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Issue = new Schema ({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

module.exports = mongoose.model('Issue',Issue);