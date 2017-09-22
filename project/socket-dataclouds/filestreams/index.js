const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

function conection(socket) {
    // socket.on()
}

io.on('connection', conection);

http.listen(port, function () {
   console.log('listening on port : ' + port);
});