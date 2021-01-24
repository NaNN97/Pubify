const { required } = require('@hapi/joi')
const { response } = require('express')
const express = require('express')
const router = express.Router()

router.use('/', (req, res) => {
    res.render('index', {title: 'Index'})
})

module.exports = router