const { required } = require('@hapi/joi')
const { response } = require('express')
const express = require('express')
const router = express.Router()
const BookController = require('../Controllers/Book.Controllers')

router.use('/', (req, res) => {
    res.render('booking', {title: 'Booking'})
})

module.exports = router