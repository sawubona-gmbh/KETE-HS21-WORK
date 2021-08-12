/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  // Put drawings here
  if (mouseIsPressed) {
    fill(45);
  } else {
    fill(215);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
