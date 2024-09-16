let sampleImage;
let x, y;
let color_;
let i;
let r, g, b;

function preload() {
  sampleImage = loadImage("picsum.photos/400/400");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  image(sampleImage, 0, 0);
}

function draw() {
  for (i = 0; i < 10; i++) {
    x = random(0, width);
    y = random(0, height);
    color_ = sampleImage.get(x, y);
    
    r = color_[0];
    g = color_[1];
    b = color_[2];
    fill(255 - r, 255 - g, 255 - b, 100);
    noStroke();
    ellipse(x, y, random(5, 15), random(5, 15));
  }
}

