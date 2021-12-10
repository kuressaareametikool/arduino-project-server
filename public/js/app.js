var socket = io();

socket.on('connection', userId => {
});

socket.on('send note', msgObj => {
    console.log(msgObj.note)
});