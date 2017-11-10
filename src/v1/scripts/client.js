let bird, pipes;

function setup() {
  createCanvas(1000, 700);
  bird = new Bird();
}

function draw() {
  background(20);
  bird.update();
  bird.render();
}

function keyPressed() {
  if (key = ' ') {
    bird.flap();
  }
}
