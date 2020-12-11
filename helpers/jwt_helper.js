const JWT = require('jsonwebtoken')
const createError = require('http-errors')
const { reject } = require('bluebird')
const { resolveSoa } = require('dns')
const { user } = require('osenv')

module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            const secret = 'some super secret'
            const options = {
                expiresIn: '1h',
                issuer: 'pubify.com',
                audience: userId
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) reject(err)
                resolve(token)
            })
        })
    }
}