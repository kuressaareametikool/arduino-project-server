
// P5.js sound analyzer
let fft;

// sample sounds
let s1, s2, s3 ;

// visualization parameters
let spectrum, energy, size;

// playing with keyboard
document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  switch (keyName) {
    case 'a':
        playSample(s1);
        break;
    case 's':
        playSample(s2);
        break;
    case 'd':
        playSample(s3);
        break;
  }
});






// preload music samples
function preloadSampleFiles() {
  soundFormats('mp3', 'ogg');
  s1 = loadSound('/public/samples/pack-1/c.mp3');
  s2 = loadSound('/public/samples/pack-1/d.mp3');
  s3 = loadSound('/public/samples/pack-1/e.mp3');
}


// play sample file
function playSample(s){
    s.play();
}



function setup() {
  createCanvas(windowWidth, windowHeight)
  
  // https://p5js.org/reference/#/p5.FFT
  fft = new p5.FFT();
  fft.smooth();

  preloadSampleFiles();
}



// visualization
function draw() {
  blendMode(BLEND);
  background(10,5,20);
  blendMode(LIGHTEST);
  noFill();

  spectrum = fft.analyze(); 
  energy = fft.getEnergy(100, 255);
  size = map(energy, 0, 255, energy*0.2, windowHeight);

  stroke('hsla(0, 80%, 100%, 0.5)');
  strokeWeight(size*0.05);
  circle(windowWidth*0.5, windowHeight*0.5, size);
}


// helper functions
// allows browser to play sounds
function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
// handles browser resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight, false);
}