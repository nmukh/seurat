# Seurat - Pointillistic Image Generator

## Description

**Seurat** is a pointillistic image generator implemented in p5.js, inspired by the artistic technique of pointillism. The project demonstrates a progressive comparison between an original image, an image overlaid with dots, and a recreation of the image using only dots. It dynamically loads an image from an external source (via the Picsum API), and the size of the image is adjusted based on the browser window, making it responsive for different screen sizes (desktop and mobile).

## Features

- Displays three side-by-side canvases:
  1. **Original Image**: A simple rendering of the original image loaded from a URL.
  2. **Image with Overlay Dots**: The image is gradually covered by randomly placed colored dots.
  3. **Dots Only**: The image is recreated using only colored dots, applied progressively.
  
- The project dynamically adapts to screen size, adjusting the canvas and image dimensions accordingly.
  
- Uses the **Picsum Photos API** to load random images of a specified size.

## Algorithm

The pointillistic effect is achieved using the following algorithm:

1. **Image Loading**: In the `preload()` function, an image is loaded from the Picsum API, with dimensions dynamically calculated based on the browser window's width.
   
2. **Canvas Setup**: In the `setup()` function, three canvases are created side-by-side using the `createGraphics()` function. These canvases represent:
   - The original image.
   - The image being progressively overlaid with dots.
   - A blank canvas where the image is recreated using dots.

3. **Dot Placement**:
   - In the `draw()` function, the program iterates multiple times per frame (typically 1000 times) to place random dots on both the second and third canvases.
   - For each dot:
     - A random pixel is selected from the original image.
     - The RGB values of the pixel are extracted.
     - A small random variation is applied to the color values to mimic the artistic randomness of pointillism.
     - The dot is drawn at a random position with a random size (between 2px and 6px) to create a more natural, non-uniform effect.
     - Transparency is applied to each dot, allowing for the gradual buildup of colors.

4. **Responsive Layout**: The width of the canvases is dynamically calculated based on the browser's window size. This makes the application adapt to various screen resolutions, ensuring that it works well on both mobile and desktop devices. The image URL from Picsum is also adjusted based on the calculated canvas size.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/seurat.git
2. Navigate to the project directory
    ```bash
    cd seurat
3. Run a local server to view the project. If you have Python installed, you can do this with:
    ```bash
    python -m http.server
4. Open your browser and navigate to http://localhost:8000 to view the project.


## Customizations


- The size of the dots and their transparency can be easily modified in the `sketch.js` file.
- You can adjust the number of dots drawn per frame in the `draw()` function to balance performance and quality.
- If you'd like to change the image source, you can modify the `preload()` function to load images from a different URL or local source.


    
