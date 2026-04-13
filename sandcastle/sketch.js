let vid;
let playing = false;
// let completion;

function setup() {
    createCanvas(400,400);
    vid = createVideo("../kominik.mp4");
    vid.size(400, 400);
    vid.hide();
}
function draw() {
    vid.loadPixels();
    
  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      let offset = ((y*width)+x)*4;
      fill(vid.pixels[offset],
        vid.pixels[offset+1],
        vid.pixels[offset+2]);
      rect(x, y, 4, 4); 
    }
  }
}
function mousePressed() {
  if (!playing) {
    vid.play();
    playing = true;
  }
  else {
    vid.pause();
    playing = false;
  }
}
