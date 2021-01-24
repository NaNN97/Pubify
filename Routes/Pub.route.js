const { required } = require('@hapi/joi')
const { response } = require('express')
const express = require('express')
const router = express.Router()
const BookController = require('../Controllers/Pub.Controllers')

router.use('/', (req, res) => {
    res.render('pubs', {title: 'Pubs'})
})

module.exports = router