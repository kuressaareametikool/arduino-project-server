const express = require('express');
const app = express();

const http = require('http').createServer(app);
const socketio = require('socket.io');
const io = socketio(http)

const port = 8000;

// config
app.use('/public', express.static('./public/'));

// Router // Here are all GET, POST, PUT, DELETE routes defined for the app
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Listen socket.io connections from client side
io.on('connection', (socket) => {
    // On chat message from user emit to all users who are connected
    socket.on('send note', msg => {
        console.log(msg);
        io.emit('send note', { 'note': msg });
    });

    // On disconnect update user list
    socket.on('disconnect', () => {
        console.log('user ' + socket.id + ' disconnected');
    });

});


// Run node.js server
http.listen(port, () => {
    console.log('listening on *:' + port);
});