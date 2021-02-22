const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')

const eventSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    players: {
        type: [User],
        required: true
    },
    score: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Team', eventSchema)