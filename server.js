const express = require('express');
const app = express();

const http = require('http').createServer(app);

const io = require("socket.io")(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

const port = process.env.PORT || 8000;

// config
app.use('/public', express.static('./public/'));

// Router // Here are all GET, POST, PUT, DELETE routes defined for the app
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Listen socket.io connections from client side
io.on('connection', (socket) => {
    // On data from user emit to all users who are connected
    socket.on('send-data', dataPackage => {
        console.log(dataPackage);
        io.emit('send-data', dataPackage ); // {key: value}
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