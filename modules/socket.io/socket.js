module.exports = function (server) {
    var io = require('socket.io')(server);

    var count = 0;

    io.on('connection', function (socket) {
        var link = false;


        socket.on('new message', function (data) {
            socket.broadcast.emit('new message', {
                username: socket.username,
                message: data
            });
        });

        socket.on('add user', function (username) {
            if (link) return;

            socket.username = username;
            ++count;
            link = true;
            socket.emit('login', {
                numUsers: count
            });

            socket.broadcast.emit('user joined', {
                username: socket.username,
                numUsers: count
            });
        });

        socket.on('typing', function () {
            socket.broadcast.emit('typing', {
                username: socket.username
            });
        });

        socket.on('stop typing', function () {
            socket.broadcast.emit('stop typing', {
                username: socket.username
            });
        });

        socket.on('disconnect', function () {
            if (link) {
                --count;

                socket.broadcast.emit('user left', {
                    username: socket.username,
                    numUsers: count
                });
            }
        });
    });
}
