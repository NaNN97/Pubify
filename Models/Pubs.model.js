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
    
})