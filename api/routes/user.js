const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');//convord the password to the hash code
const jwt = require('jsonwebtoken');
const User = require('../model/user')

router.get('/', (req, res) => {
    res.status(200).json({
        massage: 'user router working'
    });
});


router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }
        else {
            const user = api({
                _id: new mongoose.Types.ObjectId,
                username: req.body.username,
                password: hash,
                //Phone: res.body.Phone,
                email: req.body.email,
                usertype: req.body.usertype
            })
            user.save()
                .then(result => {
                    res.status(200).json({
                        api: result

                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                })
        }

    })


});


router.post('/login', (req, res) => {
    api.find({ username: req.body.username })
        .exec()
        .then(user => {
            if (user.length < 1)// user not found the user
            {
                return res.status(401).json({
                    msg: "user not exist"

                })
            }
            bcrypt.compare(req.body.password,user[0].password, (err, result) => {
                if (!resut) {
                    return res.status(401).json({
                        msg: 'password matching fail'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        username: user[0].username,
                        usertype: user[0].usertype,
                        email: user[0].email,
                        phone: user[0].phone
                    },
                        'this is dummy text',
                        {
                            expiresIn: "24h"
                        }
                    );

                    res.status(200).json({
                        username: user[0].username,
                        usertype: user[0].usertype,
                        email: user[0].email,
                        phone: user[0].phone,
                        token: token
                    })
                }

            })
        })
        .catch(err => {
            res.status(500).json({
                err: err
            })
        })
})



module.exports = router;


