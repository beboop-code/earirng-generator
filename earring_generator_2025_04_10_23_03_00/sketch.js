let earX = 128;
let earY = 313;
let holeX = earX + 5;
let holeY = earY + 12;
let earringHeightMid = 190;
let earringWidthMid = 90;
let maxLines = 9;
let earringHeight, earringWidth, curvature;
let leftYs = [];
let rightYs = [];
let r, g, b;
let colorsOn = true;
let img;

function preload() {
  img = loadImage("ear for earrings2.jpg");
}

function setup() {
  createCanvas(500, 600);
  background(255);
  image(img, 0, 0, 500, 600);
}

function draw() {}

function mouseClicked() {
  background(255);
  image(img, 0, 0, 500, 600);
  leftYs = [];
  rightYs = [];
  earringWidth = random(earringWidthMid - 15, earringWidthMid + 15);
  earringHeight = random(earringHeightMid - 30, earringHeightMid + 30);
  curvature = random(1, 40);
  stroke(110, 38, 14);
  fill(242, 210, 189);
  rect(earX, earY, earringWidth, earringHeight, curvature);
  fill(211, 151, 114);
  circle(earringWidth / 2 + earX, holeY, 8);
  fill(110, 38, 14);
  stroke(110, 38, 14);
  strokeWeight(2);
  circle(earringWidth / 2 + earX, holeY - 48, 5);
  line(earringWidth / 2 + earX, holeY - 3, earringWidth / 2 + earX, holeY - 48);
  strokeWeight(1);
  createLine(random(maxLines));
  if (colorsOn) {
    colorShapes();
  }
}

function createLine(c) {
  for (i = 0; i < c; i++) {
    leftY1 = random(earY + curvature, earY + earringHeight - curvature);
    rightY1 = random(earY + curvature, earY + earringHeight - curvature);
    line(earX, leftY1, earX + earringWidth, rightY1);
    leftYs.push(leftY1);
    rightYs.push(rightY1);
  }
}

function keyTyped() {
  colorsOn = !colorsOn;
}

function colorShapes() {
  let i = 0;
  while (i < rightYs.length) {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    fill(r, b, g);
    beginShape();
    vertex(earX, leftYs[i]);
    vertex(earX + earringWidth, rightYs[i]);
    vertex(earX + earringWidth, earringHeight + earY);
    vertex(earX, earringHeight + earY);
    endShape(CLOSE);
    i++;
  }
}
