'use strict'

const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    author: String,
    body: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('message', messageSchema)
