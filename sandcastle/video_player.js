let myPlayer = videojs("current_video", {});
let lastClick = 100;
myPlayer.pause();
// for CHanging Time
let maxInt = 0;
let maxIntPlace = (0, 0);

let vid;

function setup() {
  //responsive dimensions
    // let canvasDiv = document.getElementById('map');
    // let width = canvasDiv.offsetWidth;
    // let height = canvasDiv.offsetHeight;
    // createCanvas(width,height);

    createCanvas(400, 400);
    background('yellow');

    vid = createVideo("../kominik.mp4");
    vid.size(400, 400);
    vid.volume(0);
    vid.hide();
}

function draw() {
  background(220);

  vid.loadPixels();
  maxInt = 0;
  for (let y = 0; y < height; y += 8) {
    for (let x = 0; x < width; x += 8) {
      let offset = ((y*width)+x)*4;
      let sum = vid.pixels[offset] + vid.pixels[offset+1] + vid.pixels[offset+2];
        if (sum > maxInt){
            maxInt = sum;
            maxIntPlace = (x,y);
        }
    }
  }
  fill('red');
  circle(maxIntPlace[0], maxIntPlace[1], 30);
}

function mousePressed(){
    myPlayer.play();
    vid.play();
}