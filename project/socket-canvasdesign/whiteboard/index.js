const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

function onConnection(socket) {
    socket.on('drawing', function (data) {
        socket.broadcast.emit('drawing', data);
    });

    socket.on('message', function (data) {
        socket.broadcast.emit('message', data);
    });
}

io.on('connection', onConnection);

http.listen(port, function () {
    console.log('listening on port ' + port);
});
