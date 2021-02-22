const Team = require("../models/Team")

module.exports = (io, socket) => {
    const setTeams = (data) => {
        
    }
    socket.on('setTeams', setTeams)
}