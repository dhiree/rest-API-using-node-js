const express = require('express');
const app = express();
const studentroute = require('./api/routes/student');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');
const userrout = require('./api/routes/user');

mongoose.connect('mongodb+srv://bhandaridheere:9917436813@cluster0.8lfzomc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

mongoose.connection.on('error', err => {
    console.log('connection faild');
});

mongoose.connection.on('connected', connectied => {
    console.log('connected with database.......')

});

// student body data collect this methord
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/student', studentroute);//end point 
app.use('/user', userrout)

    
app.use((req, res) => {
    res.status(200).json({
        message: "app is running in 3000 port"

    });
});


module.exports = app;

