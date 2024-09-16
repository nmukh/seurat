let sampleImage;
let canvas1, canvas2, canvas3;
let x, y;
let color_;
let r, g, b;
let canvasWidth = 800;  // Default width
let canvasHeight = 800;  // Default height

function preload() {
  // Calculate canvas dimensions based on screen size
  canvasWidth = floor(windowWidth / 3) - 20;  // Leave space for margins
  canvasHeight = canvasWidth;  // Keep aspect ratio 1:1

  // Create the URL for the dynamic image size from Picsum
  let imageUrl = `https://picsum.photos/${canvasWidth}/${canvasHeight}`;

  // Load the image using the dynamically generated URL
  sampleImage = loadImage(imageUrl);
}

function setup() {
  // Create the main canvas with space for 3 side-by-side canvases
  createCanvas(3 * canvasWidth, canvasHeight);  // Total width for three canvases
  background(255);

  // Create three separate graphics objects (off-screen canvases)
  canvas1 = createGraphics(canvasWidth, canvasHeight);  // For the original image
  canvas2 = createGraphics(canvasWidth, canvasHeight);  // For the image with dots overlay
  canvas3 = createGraphics(canvasWidth, canvasHeight);  // For dots only

  // Draw the full image on the first canvas
  canvas1.image(sampleImage, 0, 0, canvasWidth, canvasHeight);

  // Initialize the second canvas with the image
  canvas2.image(sampleImage, 0, 0, canvasWidth, canvasHeight);
}

function draw() {
  // Draw points gradually on both canvas2 (image + dots) and canvas3 (dots only)
  for (let i = 0; i < 1000; i++) {
    x = floor(random(0, sampleImage.width));
    y = floor(random(0, sampleImage.height));
    
    color_ = sampleImage.get(x, y);  // Get color at random pixel

    // Extract color components
    r = red(color_);
    g = green(color_);
    b = blue(color_);

    // Add slight color variation
    r = constrain(r + random(-20, 20), 0, 255);
    g = constrain(g + random(-20, 20), 0, 255);
    b = constrain(b + random(-20, 20), 0, 255);

    // Set fill with alpha for transparency
    canvas2.fill(r, g, b, random(100, 200));  // Dots with image overlay
    canvas3.fill(r, g, b, random(100, 200));  // Dots only

    noStroke();

    // Draw ellipses on both canvas2 and canvas3
    let diameter = random(2, 6);
    canvas2.ellipse(x, y, diameter, diameter);  // Dots on image
    canvas3.ellipse(x, y, diameter, diameter);  // Dots only
  }

  // Render the canvases to the main canvas in a row
  image(canvas1, 0, 0);                // Original image on the left
  image(canvas2, canvasWidth, 0);      // Image + dots in the center
  image(canvas3, 2 * canvasWidth, 0);  // Dots only on the right
}

function windowResized() {
  // Adjust canvas sizes if the window is resized
  setup();  // Re-run setup to adjust everything
}

