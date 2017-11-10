let bird, pipes;

let counter = 0;
let rate = 100;

function setup() {
  createCanvas(1000, 700);
  bird = new Bird();
  pipes = new Pipes();
}

function draw() {
  background(20);

  // bird
  bird.update();
  bird.render();

  // pipes
  counter++;
  if (counter === rate) {
    counter = 0;
    pipes.new();
  }
}

function keyPressed() {
  if (key = ' ') {
    bird.flap();
  }
}
