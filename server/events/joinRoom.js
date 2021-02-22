const User = require("../models/User")
const Room = require("../models/Room")

module.exports = (io, socket) => {
    const joinRoom = (data) => {
        var query = {id: data.room}
        var user
        Room.findOne(query, (err, room) => {
            if (err) {
                console.log(err)
            } else if (room.players.includes(player => player.id == data.id)) {
                User.findOne({id: data.id}, (err, userRes) => {
                    user = userRes
                })
            } else {
                user = new User(data)
                socket.emit("playerCreated", data = {user: user})
            }
            Room.findOneAndUpdate(query, {$push: {players: user}}, {new: true}, (err, room) => {
                if (err) console.log(err)
                socket.join(data.room)
                io.to(data.room).emit("gameUpdate", data = {room: room})
            })
        })
    }
    socket.on('join', joinRoom)
}