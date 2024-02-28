const express = require('express');
const router = express.Router();
const Student = require('../model/studataschema')
const mongoose = require('mongoose');

// get req is get the data from database
router.get('/', (req, res) => {
    Student.find()
        .then(result => {
            res.status(200).json({
                studentdata: result
            })
        })
        .catch(err => {
            console.log(error)
        })
});
//using post the id  then get the name email phone
// router.get('/:id', (req, res) => {
//     console.log(req.params.id);
//     Student.findById(req.params.id)
//         .then(result => {
//             student: result
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({
//                 error: err
//             });
//         });
// });

//body post data comming the student post request
try {
    router.post('/', (req, res) => {
        const student = new Student({
            _id: new mongoose.Types.ObjectId,//this id create by mongodb him self
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender

        })
        student.save()
            .then(result => {
                console.log(result);
                res.status(200).json({
                    newstudent: result
                });
            });
    });

} catch (error) {
    console.log('newstudent data is not save ')
}


module.exports = router;



// {
//     "name":"rahul",
//     "gender":"male",
//     "phone":9917436813,
//     "email":"rahul@gmail.com"
//   }




