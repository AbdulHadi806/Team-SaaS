const socketIo = require('socket.io');

let io; 

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: "http://localhost:3000",
        },
    });

    io.on('connection', (socket) => {
        console.log('A user connected');
        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
    });

    return io;
}

module.exports = {
    initializeSocket,
    getIoInstance: () => io,
};