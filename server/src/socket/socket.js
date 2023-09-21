const socketIo = require('socket.io');
const User = require('../model/userModal');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: "http://localhost:3000",
        },
    });

    io.on('connection', (socket) => {
        let userId; 
        socket.on('online-user', async (onlineUserId) => {
            userId = onlineUserId;
            if(userId){
                try {
                    await User.findByIdAndUpdate(userId, { is_online: true });
                    io.emit(`fetch_user_status`, {
                        is_online: true,
                    });
                } catch (err) {
                    console.error('Error updating user activity:', err);
                }
            }
        });

        socket.on('disconnect', async () => {
            if (userId) {
                try {
                    await User.findByIdAndUpdate(userId, { is_online: false });
                    io.emit(`fetch_user_status`, {
                        is_online: false,
                    });
                } catch (err) {
                    console.error('Error updating user activity:', err);
                }
            }
        });
    });

    return io;
}

module.exports = {
    initializeSocket,
    getIoInstance: () => io,
};
