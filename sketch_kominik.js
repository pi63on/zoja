let vid;

function setup() {
  //responsive dimensions
  // let canvasDiv = document.getElementById('map');
  // let width = canvasDiv.offsetWidth;
  // let height = canvasDiv.offsetHeight;
  // createCanvas(width,height);

  createCanvas(400,400);
  background('yellow');
  textSize(11);

  vid = createVideo("kominik.mp4");
  // vid.loop();
  vid.hide();
  vid.size(400, 400);
  noStroke();
  // frameRate(20);
}

function draw() {
  // background(220);

  // vid.loadPixels();
  // for (let y = 0; y < height; y += 8) {
  //   for (let x = 0; x < width; x += 8) {
  //     let offset = ((y*width)+x)*4;
  //     fill(vid.pixels[offset],
  //       vid.pixels[offset+1],
  //       vid.pixels[offset+2]);
  //       rect(x, y, 8, 8); 
  //   }
  // }
}

function mousePressed(){
  vid.play();
}