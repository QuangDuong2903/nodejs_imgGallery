const express = require('express')

const jwt = require('jsonwebtoken')

const router = express.Router()

const path = require('path')



const AccountModel = require('../models/account')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname.substring(0, __dirname.length - 7), 'views/login.html'));
})

router.post('/', (req, res) => {
    AccountModel.findOne({
        username: req.query.username
    })
    .then(data => {
        if(data)
        {
            if(data.password == req.query.password)
            {
                var token = jwt.sign({ _id: data._id }, 'qd')
                res.json({src: data._id, token: token})
            }
            else
                res.json({message:'Sai mật khẩu'})
        }
        else
            res.status(300).json({message:'Tài khoản không tồn tại'})
    })
    .catch(err => {
        res.status(400).json({message: 'Lỗi Server'})
    })
})

module.exports = router;