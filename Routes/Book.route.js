const { required } = require('@hapi/joi')
const { response } = require('express')
const express = require('express')
const router = express.Router()
const BookController = require('../Controllers/Book.Controllers')

router.get('/book', BookController.book)

router.post('/find', BookController.find)

module.exports = router