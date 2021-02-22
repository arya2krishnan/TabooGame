const Room = require('../models/Room')

module.exports = (io, socket) => {
    const createRoom = (data) => {
        var code = Math.random() * 10000
        var room = new Room({id: code, players: [], teams: [], words: []})
        room.save((err, Room) => {
            if (err) console.log(err)
        })
        socket.join(code)
        socket.emit('created', data = {room: room})
    }
    socket.on('create', createRoom)
}