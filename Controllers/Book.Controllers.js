const createError = require('http-errors')
const User = require('../Models/User.model')

module.exports = {
  find: async (req, res, next) => {
    try {
      // const { email, password } = req.body
      // if (!email || !password) throw createError.BadRequest()

      const result = await User.find()
      res.send({ result })
    } catch (error) {
        next(error)
    }
  },

  book: async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error)
    }
  }
}