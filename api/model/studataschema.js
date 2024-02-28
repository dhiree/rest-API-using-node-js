const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,//create a unoq id in student help of mongodb
    name: String,
    email: String,
    Phone: Number,
    gender: String
});

module.exports = mongoose.model('Student', studentschema);
