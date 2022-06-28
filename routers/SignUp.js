const express = require('express');
var router = express.Router();
const AccountModel = require('../models/account');

router.post('/', (req, res)=> {
    AccountModel.findOne({
        username: req.body.username
    })
    .then(data => {
        if(data)
            res.json({message: 'Tài khoản đã tồn tại'})
        else
            return AccountModel.create({
                username: req.body.username,
                password: req.body.password,
                imgArray: []
            })
    })
    .then(data => {
        if(data)
            res.json({message: 'Tạo tài khoản thành công', src: data._id})
    })
    .catch(err => {
        res.status(500).json({ message: 'Lỗi server'})
    })
})

module.exports =router;