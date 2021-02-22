const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Room = require("./Room")
const Team = require("./Team")

const eventSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    presenting: {
        type: Boolean,
        required: true
    },
    guessing: {
        type: Boolean,
        required: true
    },
    room: {
        type: String,
        required = true
    },
    team: {
        type: String,
        required = false
    }
})

module.exports = mongoose.model('User', eventSchema)