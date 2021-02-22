const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
    cors: {
        origin: "https://example.com",
        methods: ["GET", "POST"]
    }
})
const mongoose = require('mongoose')
const User = require('./models/User')
const Team = require('./models/Team')
const Room = require('./models/Room')

mongoose.connect('mongodb+srv://orangatan:taboo@cluster0.aeoy1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const createRoom = require('./events/createRoom')

const onConnection = (socket) => {
    createRoom(io, socket)
}

io.on('connection', onConnection)


http.listen(3000, () => {
    console.log('listening on port 3000')
})