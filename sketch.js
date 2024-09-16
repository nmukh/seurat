let sampleImage;

function preload() {
  sampleImage = loadImage("picsum.photos/400/400");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  image(sampleImage, 0, 0);
}

function draw() {
  // Empty for now
}

