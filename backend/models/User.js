const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    }
})

module.exports = mongoose.model('User', eventSchema)