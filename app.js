const express = require('express')
const { create } = require('domain')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()
require('./helpers/init_mongodb')
const { verifyAccessToken } = require('./helpers/jwt_helper')
require('./helpers/init_redis')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')

const AuthRoute = require('./Routes/Auth.route')
const BookingRouter = require('./Routes/Book.route')
const IndexRouter = require('./Routes/Index.route')
const PubsRouter = require('./Routes/Pub.route')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Templating Engine
app.set('views', './Views')
app.set('view engine', 'ejs')

app.get('/auth', verifyAccessToken, async (req, res, next) => {
  res.send('Hello from express.')
})

//      ---Authorization Page---
app.use('/auth', AuthRoute)

//      ---Index         Page---
app.use('/home', IndexRouter)

//      ---Bookinbooking Page---
app.use('/booking', BookingRouter)

//      ---Bookinbooking Page---
app.use('/pubs', PubsRouter)

// Error handler
app.use((req, res, next) => {
  res.status(404).send("This webpage doesn't exists!")
})

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})


// Listen on port 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})