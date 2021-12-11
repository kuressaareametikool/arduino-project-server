const socket = io();
// server
socket.on('connection', userId => {
  console.log("Connection established");
});
socket.on('send note', msgObj => {
  console.log(msgObj.note);
  //playSample(s2);  // play sample file if sample player is used
  playSynth();    // play synth 
});
