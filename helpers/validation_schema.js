const Joi = require("@hapi/joi")

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
    phone: Joi.number()
})

module.exports = {
    authSchema,
}