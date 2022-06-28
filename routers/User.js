const express = require('express')
var router = express.Router()
const AccountModel = require('../models/account')

router.get('/:id', (req, res) => {
    AccountModel.findById(req.params.id)
    .then(data => {
        res.render('profile', {id: data._id, name: data.username, images: data.imgArray})
    })
    .catch(err => {
        res.status(500).send('Lỗi server')
    })
})

const fs = require('fs')

const path = require('path')

const multer = require('multer')
const { isObject } = require('util')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({storage: storage})

router.post('/:id', upload.single('image'), (req, res) => {
    var img = {
        data: fs.readFileSync(path.join('E:/Quang Dương/Web/Node js/MVC/uploads/' + req.file.filename)),
        contentType: 'image/png'
    }
    AccountModel.findById(req.params.id)
    .then(data => {
        data.imgArray.push(img)
        data.save()
        res.render('profile', {id: data._id, name: data.username, images: data.imgArray})
    })
    .catch(err => {
        res.status(500).send('Lỗi server')
    })
})

module.exports = router;