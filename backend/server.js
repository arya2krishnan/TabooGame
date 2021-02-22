const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const mongoose = require('mongoose')
const User = require('./models/User')
const Team = require('./models/Team')
const Room = require('./models/Room')

mongoose.connect('mongodb+srv://orangatan:taboo@cluster0.aeoy1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

io.on('connection', (socket) => {
    socket.on('create', (data) => {
        var code = Math.random() * 10000
        socket.join(code)
    })
})


http.listen(3000, () => {
    console.log('listening on port 3000')
})