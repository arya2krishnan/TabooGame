const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Team = require('./Team')

const eventSchema = new Schema({
    id: {
        type: String,
        required = true
    },
    teams: {
        type: [Team],
        required: true
    },
    words: {
        type: [String],
        required: true
    },
}, {collection: "roomCollection"})

module.exports = mongoose.model('Room', eventSchema)