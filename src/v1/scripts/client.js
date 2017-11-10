let bird, pipes;

let counter = 0;
let rate = 80;

function setup() {
  createCanvas(1000, 700);
  bird = new Bird();
  pipes = [];
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
    pipes.push(new Pipe);
  }
  for (var i = pipes.length -1; i >= 0; i--) {
    if (i === 0) {
      if (pipes[i].x === 0) {
        pipes.shift();
      }
    }
    pipes[i].update();
    pipes[i].render();
  }
}

function keyPressed() {
  if (key = ' ') {
    bird.flap();
  }
}
