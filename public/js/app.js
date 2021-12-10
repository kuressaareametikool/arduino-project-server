var socket = io();

const sounds = [];
let s1 ;


var input;
var fft;
var steps, energyStep;

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}



socket.on('connection', userId => {
});

socket.on('send note', msgObj => {
    console.log(msgObj.note);
    playSound(s1);
});



function setup() {
    createCanvas(windowWidth, windowHeight)

    s1 = createAudio('/public/samples/pack-1/c.mp3');

    steps = 36;
  energyStep = 15000/steps;
  
//   input = new p5.AudioIn();
    preload();
  input = s1;
  fft = new p5.FFT();
  fft.setInput(input);
  fft.smooth();
}

function draw() {
    blendMode(BLEND);
    background(10,5,20);

    var spectrum = fft.analyze(); 
  
    blendMode(LIGHTEST);
    noFill();
  
    // var energy = fft.getEnergy(5, 100);
    // var size = map(energy, 0, 255, energy*0.3, windowHeight);
    // stroke('hsla(0, 80%, 80%, 0.5)');
    // strokeWeight(size*0.05);
    // circle(windowWidth*0.5, windowHeight*0.5, size);

    // for(var i=0; i<steps; i++){
    //   energy = fft.getEnergy(i*5, i*energyStep);
    //   var size = map(energy, 0, 255, energy*0.3, windowHeight);
    //   var hue = i*10;
    //   var brightness = map(energy, 0, 200, 30, 70);
    //   var opacity = map(size, 0, windowHeight, 0, 0.8);
    //   stroke('hsla('+hue+',100%,'+brightness+'%,'+opacity+')');
    //   strokeWeight(size*0.05);
    //   arc(windowWidth/2, windowHeight/2, i*20, i+size, 360/i, 360/i+size*0.02);
    // }
  }


function preload() {
  soundFormats('mp3', 'ogg');
  s1 = loadSound('/public/samples/pack-1/c.mp3');
}


  function windowResized() {
    resizeCanvas(windowWidth, windowHeight, false);
  }

function playSound(s){
    s.play();
}