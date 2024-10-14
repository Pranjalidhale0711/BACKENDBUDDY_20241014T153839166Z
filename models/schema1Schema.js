const mongoose = require('mongoose');

const schema1Schema = new mongoose.Schema(
{
    fieldname1: { 
        type: String,
        required: false,
        unique: true
    },
});

module.exports = mongoose.model('schema1', schema1Schema);
