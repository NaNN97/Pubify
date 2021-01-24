const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const PubsSchema = new Schema({
    pubName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    tables: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        "City": String,
        "Postcode": String,
    },
    daysOpen: {
        "Monday": {
            Hours: String,
        },

        "Tuesday": {
            Hours: String
        },

        "Wednesday": {
            Hours: String
        },

        "Thursday": {
            Hours: String
        },

        "Friday": {
            Hours: String
        },

        "Saturday": {
            Hours: String
        },

        "Sunday": {
            Hours: String
        }
    }

})

const Pub = mongoose.model('pubs', PubsSchema)
module.exports = Pub