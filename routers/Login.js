const express = require('express');
var router = express.Router();
const AccountModel = require('../models/account')

router.get('/', (req, res) => {
    AccountModel.findOne({
        username: req.query.username
    })
    .then(data => {
        if(data)
        {
            if(data.password == req.query.password)
                res.json({src: data._id})
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