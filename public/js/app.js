const socket = io();
// server
socket.on('connection', userId => {
  console.log("Connection established");
});
socket.on('send-data', dataObj => {
  console.log(JSON.stringify(dataObj));
});
