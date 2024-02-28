const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,//create a unoq id in student help of mongodb
    username: String,
    password:String,
    //Phone: Number,
    email:String,
    usertype:String

});

module.exports = mongoose.model('user', userSchema);



// {
//     "username":"abcd",
//     "password":"123456789",
//     "Phone": 9917436812,
//     "email":"abcd@gmail.com",
//     "usertype":"admin"
    
//   }
  